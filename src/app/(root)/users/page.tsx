"use client"
import {DataCard} from "@/widgets/data-card";
import {ColumnDef} from "@tanstack/table-core";
import {DataTable} from "@/widgets/data-table";
import {BasePassenger} from "@/shared/api/model";
import {Check, X} from "lucide-react";
import {useGetPassengersPassengerAllGet} from "@/shared/api/passenger/passenger";


export default function Page() {
    const {data: drivers, isLoading} = useGetPassengersPassengerAllGet()
    const data = drivers || []
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
    return (
        <DataCard title="Users" isLoading={isLoading}>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}