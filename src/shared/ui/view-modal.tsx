import {ReactNode} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/shared/ui/dialog";
import {cn} from "@/shared/ui/utils";
import {useMediaQuery} from "react-responsive";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/shared/ui/drawer";

interface ViewModalProps {
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    children: ReactNode;
    fullScreen?: boolean;
}

export const ViewModal = ({title, open, setOpen, children, fullScreen = false}: ViewModalProps) => {
    const isSmallDevice = useMediaQuery({query: 'only screen and (max-width: 640px)'});

    return (
        isSmallDevice ? (
            <Drawer open={open} onOpenChange={(open) => setOpen(open)}>
                <DrawerContent className="">
                    <div className="px-4 max-h-screen overflow-y-auto   ">
                        <DrawerHeader>
                            <DrawerTitle>{title}</DrawerTitle>
                        </DrawerHeader>
                        {children}
                    </div>
                </DrawerContent>
            </Drawer>
        ) : (
            <Dialog open={open} onOpenChange={() => setOpen(!open)}>
                <DialogContent
                    className={cn(fullScreen && "min-w-[calc(100%-80px)] h-[calc(100%-80px)] overflow-y-auto")}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>
        )
    )
        ;
};
