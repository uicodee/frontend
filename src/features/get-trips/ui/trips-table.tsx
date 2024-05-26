"use client"

import {useGetTripsTripAllGet} from "@/shared/api/trip/trip";
import {ColumnDef} from "@tanstack/table-core";
import {Trips} from "@/shared/api/model";
import {Check, X} from "lucide-react";
import {DataTable} from "@/widgets/data-table";
import {Checkbox} from "@/shared/ui/checkbox";

export const TripsTable = () => {
    const {data: trips, isLoading} = useGetTripsTripAllGet()
    const data = trips || []
    const columns: ColumnDef<Trips>[] = [
        {
            id: "select",
            header: ({table}) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({row}) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            )
        },
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
            accessorFn: info => {
                const formatter = new Intl.NumberFormat("en-US", {
                    style: "decimal",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                });
                return formatter.format(info.cost)
            }
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
    return <DataTable columns={columns} data={data} onDelete={() => console.log("delete")} isLoading={isLoading}/>
}