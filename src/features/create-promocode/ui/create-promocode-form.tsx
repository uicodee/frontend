"use client"

import {z} from "zod";
import {useCreatePromocode} from "@/features/create-promocode";
import {useQueryClient} from "@tanstack/react-query";
import {useCreatePromocodePromocodeNewPost} from "@/shared/api/promocode/promocode";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {Calendar} from "@/shared/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/shared/ui/popover";
import {CalendarIcon} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/shared/ui/select";
import {format} from "date-fns";

const formSchema = z.object({
    promocode: z.string({required_error: "Promocode is required"}).min(5, {
        message: "Promocode length must be 5 characters",
    }).max(10),
    type: z.enum(['percentage', 'amount']),
    value: z.string({required_error: "Promocode value is required"}),
    expiresAt: z.date()
})

export const CreatePromocodeForm = () => {
    const setOpen = useCreatePromocode((state) => state.setOpen)
    const queryClient = useQueryClient()
    const mutation = useCreatePromocodePromocodeNewPost({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["promocodes"]}).then(() => setOpen(false))
            }
        }
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const year = values.expiresAt.getFullYear();
        const month = String(values.expiresAt.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
        const day = String(values.expiresAt.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;
        mutation.mutate({data: {...values, value: Number(values.value), expiresAt: formattedDate}})
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="promocode"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Promocode</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Type</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a type"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Types</SelectLabel>
                                            <SelectItem value="percentage">Percentage</SelectItem>
                                            <SelectItem value="amount">Amount</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="value"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Value</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="expiresAt"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Expires at</FormLabel>
                            <FormControl>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className="w-full justify-start text-left font-normal"
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4"/>
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
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