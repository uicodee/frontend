"use client"

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/ui/dialog";
import {CreateLocationForm, useCreateLocation} from "@/features/create-location";


export const CreateLocation = () => {
    const open = useCreateLocation((state) => state.open)
    const setOpen = useCreateLocation((state) => state.setOpen)
    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create location</DialogTitle>
                    <DialogDescription>
                        Fill the form and create location
                    </DialogDescription>
                </DialogHeader>
                <CreateLocationForm/>
            </DialogContent>
        </Dialog>
    )
}