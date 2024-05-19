"use client"

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";

const formSchema = z.object({
    name: z.string({required_error: "Name is required"}).min(3, {
        message: "Name length must be 3 characters",
    }).max(50),
    numberOfSeats: z.string({required_error: "Seat count is required"}),
    // photo: z.instanceof(FileList, {message: "Please upload a file"})
})

export const CreateCarForm = () => {
    // const mutation = useCreateCarCarNewPost({
    //     mutation: {
    //         onSuccess: () => {
    //             console.log("Success")
    //         }
    //     }
    // })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // defaultValues: {
        //     photo: null
        // }
    })

    // const photoRef = form.register("photo");

    function onSubmit(values: z.infer<typeof formSchema>) {
        // const reader = new FileReader();
        // reader.readAsText(values.photo[0]);
        // mutation.mutate({
        //     data: reader.result,
        //     params: {name: values.name, numberOfSeats: Number(values.numberOfSeats)}
        // });
        console.log(values)
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
                {/*<FormField*/}
                {/*    control={form.control}*/}
                {/*    name="photo"*/}
                {/*    render={() => (*/}
                {/*        <FormItem>*/}
                {/*            <FormLabel>Photo</FormLabel>*/}
                {/*            <FormControl>*/}
                {/*                <Input type="file"  {...photoRef} />*/}
                {/*            </FormControl>*/}
                {/*            <FormMessage/>*/}
                {/*        </FormItem>*/}
                {/*    )}*/}
                {/*/>*/}
                <Button type="submit" className="w-full">Create</Button>
            </form>
        </Form>
    )
}