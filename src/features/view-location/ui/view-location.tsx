"use client"

import {useViewLocation} from "@/features/view-location";
import {ViewModal} from "@/shared/ui/view-modal";

export const ViewLocation = () => {
    const location = useViewLocation((state) => state.location)
    const open = useViewLocation((state) => state.open)
    const setOpen = useViewLocation((state) => state.setOpen)
    return (
        <ViewModal title={location.name} open={open} setOpen={setOpen}>
            <div className="flex flex-col justify-start gap-y-8 mt-5">
                {/*<div className="flex flex-col gap-1">*/}
                {/*    <p className="text-sm font-medium leading-none">Location name</p>*/}
                {/*    <p className="text-sm text-muted-foreground">{location.name}</p>*/}
                {/*</div>*/}
            </div>
        </ViewModal>
    )
}
