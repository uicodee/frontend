"use client"

import {DataCard} from "@/widgets/data-card";
import {DataTable} from "@/widgets/data-table";
import {ColumnDef} from "@tanstack/table-core";
import {useGetTripsTripAllGet} from "@/shared/api/trip/trip";
import {Trips} from "@/shared/api/model";
import {Check, X} from "lucide-react";


export default function Page() {
    const {data: trips, isLoading} = useGetTripsTripAllGet()
    const data = trips || []
    const columns: ColumnDef<Trips>[] = [
        {
            accessorKey: "departure",
            header: "Departure",
            accessorFn: info => info.departure.name
        },
        {
            accessorKey: "destination",
            header: "Destination",
            accessorFn: info => info.destination.name
        },
        {
            accessorKey: "fromDate",
            header: "From date",
        },
        {
            accessorKey: "toDate",
            header: "To date",
        },
        {
            accessorKey: "cost",
            header: "Cost",
        },
        {
            accessorKey: "driver",
            header: "Driver",
            accessorFn: info => info.driver.fullName
        },
        {
            accessorKey: "isActive",
            header: "Active",
            cell: ({getValue}) => {
                const isActive = getValue<string>();
                return (
                    isActive ? <Check className="h-5 w-5"/> :
                        <X className="h-5 w-5"/>
                );
            }
        }
    ]
    return (
        <DataCard title="Trips" isLoading={isLoading}>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}