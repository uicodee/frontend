"use client"

import {Button} from "@/shared/ui/button";
import {CirclePlus} from "lucide-react";
import {useCreateColor} from "../model/store"

export const CreateColorButton = () => {
    const setOpen = useCreateColor((state) => state.setOpen)
    return (
        <Button
            size="sm"
            variant="outline"
            onClick={() => setOpen(true)}>
            <CirclePlus className="w-4 h-4 mr-2" strokeWidth={1.75}/>New
        </Button>
    )
}