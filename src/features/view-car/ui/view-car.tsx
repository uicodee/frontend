"use client"

import {useViewCar} from "@/features/view-car";
import Image from "next/image";
import {AspectRatio} from "@/shared/ui/aspect-ratio";
import {ViewModal} from "@/shared/ui/view-modal";

export const ViewCar = () => {
    const car = useViewCar((state) => state.car)
    const open = useViewCar((state) => state.open)
    const setOpen = useViewCar((state) => state.setOpen)
    return (
        <ViewModal title={car.name} open={open} setOpen={setOpen}>
            <div className="flex flex-col justify-start gap-y-4">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Number of seats</p>
                    <p className="text-sm text-muted-foreground">{car.numberOfSeats}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Photo</p>
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                        <Image
                            layout='fill'
                            objectFit='contain'
                            src={car.photo as string}
                            alt={car.name}
                            className="w-full"/>
                    </AspectRatio>
                </div>
            </div>
        </ViewModal>
    )
}
