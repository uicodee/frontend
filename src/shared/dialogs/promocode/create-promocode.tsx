"use client"

import {CreatePromocodeForm, useCreatePromocode} from "@/features/create-promocode";
import {useMediaQuery} from "react-responsive";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "@/shared/ui/drawer";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/ui/dialog";

export const CreatePromocode = () => {
    const open = useCreatePromocode((state) => state.open)
    const setOpen = useCreatePromocode((state) => state.setOpen)
    const isSmallDevice = useMediaQuery({query: 'only screen and (max-width: 640px)'});

    return (
        isSmallDevice ? (
            <Drawer open={open} onOpenChange={(open) => setOpen(open)}>
                <DrawerContent>
                    <div className="px-4 pt-3 py-10 w-full">
                        <DrawerHeader>
                            <DrawerTitle>Create promocode</DrawerTitle>
                            <DrawerDescription>Fill the form and create promocode</DrawerDescription>
                        </DrawerHeader>
                        <CreatePromocodeForm/>
                    </div>
                </DrawerContent>
            </Drawer>
        ) : (
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create promocode</DialogTitle>
                        <DialogDescription>
                            Fill the form and create promocode
                        </DialogDescription>
                    </DialogHeader>
                    <CreatePromocodeForm/>
                </DialogContent>
            </Dialog>
        )
    )
}