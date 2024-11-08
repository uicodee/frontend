"use client"

import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/ui/dialog";
import {CreateLocationForm, useCreateLocation} from "@/features/create-location";
import {useMediaQuery} from "react-responsive";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "@/shared/ui/drawer";


export const CreateLocation = () => {
    const open = useCreateLocation((state) => state.open)
    const setOpen = useCreateLocation((state) => state.setOpen)
    const isSmallDevice = useMediaQuery({query: 'only screen and (max-width: 640px)'});

    return (
        isSmallDevice ? (
            <Drawer open={open} onOpenChange={(open) => setOpen(open)}>
                <DrawerContent>
                    <div className="px-4 pt-3 py-10 w-full">
                        <DrawerHeader>
                            <DrawerTitle>Create location</DrawerTitle>
                            <DrawerDescription>Fill the form and create location</DrawerDescription>
                        </DrawerHeader>
                        <CreateLocationForm/>
                    </div>
                </DrawerContent>
            </Drawer>
        ) : (
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
    )
}