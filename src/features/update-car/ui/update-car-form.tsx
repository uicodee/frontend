"use client"

import {z} from "zod";
import {useUpdateCar} from "../model/store";
import {useQueryClient} from "@tanstack/react-query";
import {useEditCarCarEditPut} from "@/shared/api/car/car";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import axios from "axios";
import {useState} from "react";


const formSchema = z.object({
    name: z.string({required_error: "Name is required"}).min(3, {
        message: "Name length must be 3 characters",
    }).max(50),
    numberOfSeats: z.number({required_error: "Seat count is required"}),
    photo: (typeof window === "undefined" ? z.any() : z
        .instanceof(FileList,)
        .optional())
})

export const UpdateCarForm = () => {
    const car = useUpdateCar((state) => state.car)
    const setOpen = useUpdateCar((state) => state.setOpen)
    const [photo, setPhoto] = useState<Blob>()
    const queryClient = useQueryClient()
    const mutation = useEditCarCarEditPut({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["cars"]}).then(() => setOpen(false))
            }
        }
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: car.name,
            numberOfSeats: car.numberOfSeats
        }
    })
    const photoRef = form.register("photo");

    function onSubmit(values: z.infer<typeof formSchema>) {
        axios.get(car.photo as string, {responseType: "blob"}).then(r => setPhoto(r.data))
        mutation.mutate({
            data: {photo: values.photo[0] === undefined ? photo : values.photo[0]},
            params: {carId: car.id, name: values.name, numberOfSeats: Number(values.numberOfSeats)}
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
                <Button type="submit" className="w-full">Update</Button>
            </form>
        </Form>
    )
}