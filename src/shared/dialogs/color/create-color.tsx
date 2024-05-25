"use client"

import {CreateColorForm, useCreateColor} from "@/features/create-color";
import {useMediaQuery} from "react-responsive";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "@/shared/ui/drawer";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/ui/dialog";

export const CreateColor = () => {
    const open = useCreateColor((state) => state.open)
    const setOpen = useCreateColor((state) => state.setOpen)
    const isSmallDevice = useMediaQuery({query: 'only screen and (max-width: 640px)'});

    return (
        isSmallDevice ? (
            <Drawer open={open} onOpenChange={(open) => setOpen(open)}>
                <DrawerContent>
                    <div className="px-4 pt-3 py-10 w-full">
                        <DrawerHeader>
                            <DrawerTitle>Create color</DrawerTitle>
                            <DrawerDescription>Fill the form and create color</DrawerDescription>
                        </DrawerHeader>
                        <CreateColorForm/>
                    </div>
                </DrawerContent>
            </Drawer>
        ) : (
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create color</DialogTitle>
                        <DialogDescription>
                            Fill the form and create color
                        </DialogDescription>
                    </DialogHeader>
                    <CreateColorForm/>
                </DialogContent>
            </Dialog>
        )
    )
}