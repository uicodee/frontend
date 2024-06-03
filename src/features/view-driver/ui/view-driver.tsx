"use client"

import {useViewDriver} from "../model/store";
import {ViewModal} from "@/shared/ui/view-modal";
import {ReactNode} from "react";
import {Star} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/ui/accordion";
import {cn} from "@/shared/ui/utils";

export const ViewDriver = () => {
    const driver = useViewDriver((state) => state.driver);
    const open = useViewDriver((state) => state.open);
    const setOpen = useViewDriver((state) => state.setOpen);

    return (
        <ViewModal title={driver.fullName} open={open} setOpen={setOpen} fullScreen>
            <div className="grid h-full grid-cols-3 place-content-start place-items-start gap-4 ">
                {/*<ViewDriverItem className="col-span-1">*/}
                {/*    <AspectRatio ratio={9 / 16} className="bg-muted">*/}
                {/*        <Image fill src={driver.driverPhoto} alt={driver.fullName} className="object-cover rounded-md"/>*/}
                {/*    </AspectRatio>*/}
                {/*</ViewDriverItem>*/}
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">ID</p>
                    <p className="text-sm text-muted-foreground">{driver.id}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Driver name</p>
                    <p className="text-sm text-muted-foreground">{driver.fullName}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Gender</p>
                    <p className="text-sm text-muted-foreground">{driver.gender}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Balance</p>
                    <p className="text-sm text-muted-foreground">{driver.balance} sums</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Birthdate</p>
                    <p className="text-sm text-muted-foreground">{driver.birthDate}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Phone number</p>
                    <p className="text-sm text-muted-foreground">{driver.phoneNumber}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Car number</p>
                    <p className="text-sm text-muted-foreground">{driver.carNumber}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Car color</p>
                    <p className="text-sm text-muted-foreground">{driver.carNumber}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Car year</p>
                    <p className="text-sm text-muted-foreground">{driver.carYear}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Driver license</p>
                    <p className="text-sm text-muted-foreground">{driver.driverLicense}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Technical passport</p>
                    <p className="text-sm text-muted-foreground">{driver.technicalPassport}</p>
                </ViewDriverItem>
                <ViewDriverItem>
                    <p className="text-sm font-medium leading-none">Rating</p>
                    <div className="flex">
                        {[...Array(driver.rating)].map((_, index) => (
                            <Star key={index} className="h-6 w-6 text-yellow-300 fill-yellow-300"/>
                        ))}
                    </div>
                </ViewDriverItem>
                <ViewDriverItem className="col-span-3">
                    <p className="text-sm font-medium leading-none">Trips</p>
                    <Accordion type="single" collapsible className="w-full">
                        {driver.trips?.map((trip, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{trip.departure.name} - {trip.destination.name}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col justify-start gap-y-4 mt-2">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium leading-none">Cost</p>
                                            <p className="text-sm text-muted-foreground">{trip.cost} sums</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium leading-none">From date</p>
                                            <p className="text-sm text-muted-foreground">{trip.fromDate}</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-medium leading-none">To date</p>
                                            <p className="text-sm text-muted-foreground">{trip.toDate}</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ViewDriverItem>
            </div>

        </ViewModal>
    )
}

const ViewDriverItem = ({children, className}: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn("w-full gap-1 border rounded-md bg-muted py-3 px-2", className)}>
            {children}
        </div>
    )
}