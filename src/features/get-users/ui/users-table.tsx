"use client"

import {useGetPassengersPassengerAllGet} from "@/shared/api/passenger/passenger";
import {ColumnDef} from "@tanstack/table-core";
import {BasePassenger} from "@/shared/api/model";
import {Check, X} from "lucide-react";
import {DataTable} from "@/widgets/data-table";
import {Checkbox} from "@/shared/ui/checkbox";

export const UsersTable = () => {
    const {data: users, isLoading} = useGetPassengersPassengerAllGet()
    const data = users || []
    const columns: ColumnDef<BasePassenger>[] = [
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
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Select row"
                />
            )
        },
        {
            accessorKey: "fullName",
            header: "Fullname",
        },
        {
            accessorKey: "location",
            header: "Location",
            accessorFn: info => info.location.name
        },
        {
            accessorKey: "phoneNumber",
            header: "Phone number",
        },
        {
            accessorKey: "balance",
            header: "Balance",
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