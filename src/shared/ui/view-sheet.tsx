import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/shared/ui/sheet";
import {ReactNode} from "react";

interface ViewSheetProps {
    open: boolean
    setOpen: (open: boolean) => void
    children: ReactNode
}

export const ViewSheet = ({open, setOpen, children}: ViewSheetProps) => {
    return (
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
            <SheetContent className="w-full overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Details</SheetTitle>
                </SheetHeader>
                {children}
            </SheetContent>
        </Sheet>
    )
}