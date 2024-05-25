"use client"
import {useMediaQuery} from "@uidotdev/usehooks";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/ui/dialog";
import {UpdateCarForm, useUpdateCar} from "@/features/update-car";
import {Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle} from "@/shared/ui/drawer";


export const UpdateCar = () => {
    const open = useUpdateCar((state) => state.open)
    const setOpen = useUpdateCar((state) => state.setOpen)
    const isSmallDevice = useMediaQuery("only screen and (max-width : 640px)");
    return (
        isSmallDevice ? (
            <Drawer open={open} onOpenChange={(open) => setOpen(open)}>
                <DrawerContent>
                    <div className="px-4 pt-3 py-10 w-full">
                        <DrawerHeader>
                            <DrawerTitle>Create car</DrawerTitle>
                            <DrawerDescription>Fill the form and create car</DrawerDescription>
                        </DrawerHeader>
                        <UpdateCarForm/>
                    </div>
                </DrawerContent>
            </Drawer>
        ) : (
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create car</DialogTitle>
                        <DialogDescription>
                            Fill the form and create car
                        </DialogDescription>
                    </DialogHeader>
                    <UpdateCarForm/>
                </DialogContent>
            </Dialog>
        )
    )
}