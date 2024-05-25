"use client"

import {Button} from "@/shared/ui/button";
import {CirclePlus} from "lucide-react";
import {useCreatePromocode} from "../model/store";

export const CreatePromocodeButton = () => {
    const setOpen = useCreatePromocode((state) => state.setOpen)
    return (
        <Button
            size="sm"
            variant="outline"
            onClick={() => setOpen(true)}>
            <CirclePlus className="w-4 h-4 mr-2" strokeWidth={1.75}/>New
        </Button>
    )
}