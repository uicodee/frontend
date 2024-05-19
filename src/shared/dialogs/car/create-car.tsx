"use client"

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/ui/dialog";
import {CreateCarForm, useCreateCar} from "@/features/create-car";

export const CreateCar = () => {
    const open = useCreateCar((state) => state.open)
    const setOpen = useCreateCar((state) => state.setOpen)
    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create car</DialogTitle>
                    <DialogDescription>
                        Fill the form and create car
                    </DialogDescription>
                </DialogHeader>
                <CreateCarForm/>
            </DialogContent>
        </Dialog>
    )
}