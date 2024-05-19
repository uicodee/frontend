"use client"

import {useCreateLocation} from "@/features/create-location";
import {CirclePlus} from "lucide-react";
import {Button} from "@/shared/ui/button";

export const CreateLocationButton = () => {
    const setOpen = useCreateLocation((state) => state.setOpen)
    return (
        <Button
            size="sm"
            variant="outline"
            onClick={() => setOpen(true)}>
            <CirclePlus className="w-4 h-4 mr-2" strokeWidth={1.75}/>New
        </Button>
    )
}