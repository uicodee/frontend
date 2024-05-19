"use client"

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {useRouter} from "next/navigation";
import {useAdminLoginLoginPost} from "@/shared/api/authentication/authentication";

const formSchema = z.object({
    email: z.string({required_error: "Username is required"}).min(3, {
        message: "Name length must be 3 characters",
    }).max(50),
    password: z.string({required_error: "Password is required"}).min(2, {
        message: "Minimal count of password must be 2",
    })
})

export const LoginForm = () => {
    const router = useRouter()
    const mutation = useAdminLoginLoginPost({
        mutation: {
            onSuccess: (data) => {
                const item = {
                    accessToken: data.access_token,
                    expiry: new Date().getTime() + (10000)
                }
                localStorage.setItem("accessToken", JSON.stringify(item))
                router.replace("/")
            }
        }
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate({data: values})
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Login</Button>
            </form>
        </Form>
    )
}