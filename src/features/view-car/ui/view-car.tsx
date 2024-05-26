"use client"

import {useViewCar} from "@/features/view-car";
import Image from "next/image";
import {AspectRatio} from "@/shared/ui/aspect-ratio";
import {ViewSheet} from "@/shared/ui/view-sheet";

export const ViewCar = () => {
    const car = useViewCar((state) => state.car)
    const open = useViewCar((state) => state.open)
    const setOpen = useViewCar((state) => state.setOpen)
    return (
        <ViewSheet open={open} setOpen={setOpen}>
            <div className="flex flex-col justify-start gap-y-8 mt-5">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Car name</p>
                    <p className="text-sm text-muted-foreground">{car.name}</p>
                </div>
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
        </ViewSheet>
    )
}
