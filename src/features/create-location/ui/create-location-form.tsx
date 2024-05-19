"use client"

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {useCreateLocationLocationNewPost} from "@/shared/api/location/location";
import {useQueryClient} from "@tanstack/react-query";
import {useCreateLocation} from "../model/store"

const formSchema = z.object({
    name: z.string({required_error: "Name is required"}).min(3, {
        message: "Name length must be 3 characters",
    }).max(50),
})

export const CreateLocationForm = () => {
    const setOpen = useCreateLocation((state) => state.setOpen)
    const queryClient = useQueryClient();
    const mutation = useCreateLocationLocationNewPost({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["locations"]}).then(() => setOpen(false))
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
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">Create</Button>
            </form>
        </Form>
    )
}