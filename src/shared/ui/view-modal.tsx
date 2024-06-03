import {ReactNode} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/shared/ui/dialog";
import {cn} from "@/shared/ui/utils";

interface ViewModalProps {
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    children: ReactNode;
    fullScreen?: boolean;
}

export const ViewModal = ({title, open, setOpen, children, fullScreen = false}: ViewModalProps) => {
    return (
        <Dialog open={open} onOpenChange={() => setOpen(!open)}>
            <DialogContent
                className={cn(fullScreen && "min-w-[calc(100%-80px)] h-[calc(100%-80px)] overflow-y-auto")}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};
