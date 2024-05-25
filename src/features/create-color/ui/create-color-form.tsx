"use client"

import {z} from "zod";
import {useCreateColor} from "@/features/create-color";
import {useQueryClient} from "@tanstack/react-query";
import {useCreateColorColorNewPost} from "@/shared/api/color/color";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {ColorPicker} from "@/shared/ui/color-picker";

const formSchema = z.object({
    name: z.string({required_error: "Name is required"}).min(3, {
        message: "Name length must be 3 characters",
    }).max(50),
    hex: z.string({required_error: "Color is required"}).min(4, {
        message: "Color length must be 4 characters",
    }).max(7)
})

export const CreateColorForm = () => {
    const setOpen = useCreateColor((state) => state.setOpen)
    const queryClient = useQueryClient()
    const mutation = useCreateColorColorNewPost({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["colors"]}).then(() => setOpen(false))
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
                <FormField
                    control={form.control}
                    name="hex"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Color</FormLabel>
                            <FormControl>
                                <ColorPicker value={field.value} onChange={field.onChange}/>
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