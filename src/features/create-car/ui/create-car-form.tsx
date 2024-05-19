"use client"

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {useCreateCarCarNewPost} from "@/shared/api/car/car";
import {useQueryClient} from "@tanstack/react-query";
import {useCreateCar} from "../model/store"

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"];


const formSchema = z.object({
    name: z.string({required_error: "Name is required"}).min(3, {
        message: "Name length must be 3 characters",
    }).max(50),
    numberOfSeats: z.string({required_error: "Seat count is required"}),
    photo: (typeof window === "undefined" ? z.any() : z
        .instanceof(FileList)
        .refine(files => files.length === 1, "Please upload a single file")
        .refine(files => ACCEPTED_FILE_TYPES.includes(files[0]?.type), "Only .jpeg and .png files are accepted")
        .refine(files => files[0]?.size <= MAX_FILE_SIZE, `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`))
})

export const CreateCarForm = () => {
    const setOpen = useCreateCar((state) => state.setOpen)
    const queryClient = useQueryClient()
    const mutation = useCreateCarCarNewPost({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["cars"]}).then(() => setOpen(false))
            }
        }
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const photoRef = form.register("photo");

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutation.mutate({
            data: {photo: values.photo[0]},
            params: {name: values.name, numberOfSeats: Number(values.numberOfSeats)}
        })
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
                    name="numberOfSeats"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Seat count</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="photo"
                    render={() => (
                        <FormItem>
                            <FormLabel>Photo</FormLabel>
                            <FormControl>
                                <Input type="file"  {...photoRef} />
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