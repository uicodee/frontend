"use client"

import {useGetPassengersPassengerAllGet} from "@/shared/api/passenger/passenger";
import {ColumnDef} from "@tanstack/table-core";
import {BasePassenger} from "@/shared/api/model";
import {Check, X} from "lucide-react";
import {DataTable} from "@/widgets/data-table";

export const UsersTable = () => {
    const {data: users, isLoading} = useGetPassengersPassengerAllGet()
    const data = users || []
    const columns: ColumnDef<BasePassenger>[] = [
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
    return <DataTable columns={columns} data={data} isLoading={isLoading}/>
}