"use client"

import {ViewSheet} from "@/shared/ui/view-sheet";
import {useViewDriver} from "../model/store";
import {Star} from "lucide-react";
import Image from "next/image";
import {AspectRatio} from "@/shared/ui/aspect-ratio";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/ui/accordion";

export const ViewDriver = () => {
    const driver = useViewDriver((state) => state.driver)
    const open = useViewDriver((state) => state.open)
    const setOpen = useViewDriver((state) => state.setOpen)
    return (
        <ViewSheet open={open} setOpen={setOpen}>
            <div className="flex flex-col justify-start gap-y-4 mt-5">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Driver name</p>
                    <p className="text-sm text-muted-foreground">{driver.fullName}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Gender</p>
                    <p className="text-sm text-muted-foreground">{driver.gender}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Balance</p>
                    <p className="text-sm text-muted-foreground">{driver.balance} sums</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Birthdate</p>
                    <p className="text-sm text-muted-foreground">{driver.birthDate}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Phone number</p>
                    <p className="text-sm text-muted-foreground">{driver.phoneNumber}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Car number</p>
                    <p className="text-sm text-muted-foreground">{driver.carNumber}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Car year</p>
                    <p className="text-sm text-muted-foreground">{driver.carYear}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Driver license</p>
                    <p className="text-sm text-muted-foreground">{driver.driverLicense}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Technical passport</p>
                    <p className="text-sm text-muted-foreground">{driver.technicalPassport}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Rating</p>
                    <p className="text-sm text-muted-foreground">
                        <div className="flex">
                            {[...Array(driver.rating)].map((_, index) => {
                                return (
                                    <Star key={index} className="h-6 w-6 text-yellow-300 fill-yellow-300"/>
                                );
                            })}
                        </div>
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Trips</p>
                    <Accordion type="single" collapsible className="w-full">
                        {driver.trips?.map((trip, index) => (
                            <AccordionItem value="item-1" key={index}>
                                <AccordionTrigger>{trip.departure.name} - {trip.destination.name}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col justify-start gap-y-4 mt-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium leading-none">Cost</p>
                                            <p className="text-sm text-muted-foreground">{trip.cost} sums</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium leading-none">From date</p>
                                            <p className="text-sm text-muted-foreground">{trip.fromDate} sums</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium leading-none">To date</p>
                                            <p className="text-sm text-muted-foreground">{trip.toDate} sums</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">Driver`&apos;`s photo</p>
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                        <Image
                            layout='fill'
                            objectFit='contain'
                            src={driver.driverPhoto as string}
                            alt={driver.fullName}
                            className="w-full"/>
                    </AspectRatio>
                </div>
            </div>
        </ViewSheet>
    )
}
