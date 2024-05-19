"use client"
// import {Metadata} from "next";
import {DataCard} from "@/widgets/data-card";
import {ColumnDef} from "@tanstack/table-core";
import {DataTable} from "@/widgets/data-table";
import {Driver} from "@/shared/api/model";
import {useGetDriversDriverAllGet} from "@/shared/api/driver/driver";
import {Check, X} from "lucide-react";

export default function Page() {
    const {data: drivers, isLoading} = useGetDriversDriverAllGet()
    const data = drivers || []
    const columns: ColumnDef<Driver>[] = [
        {
            accessorKey: "fullName",
            header: "Fullname",
        },
        {
            accessorKey: "car",
            header: "Car",
            accessorFn: info => info.car.name
        },
        {
            accessorKey: "carNumber",
            header: "Car number",
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
            accessorKey: "status",
            header: "Status",
            cell: ({getValue}) => {
                const status = getValue<string>();
                return (
                    <div
                        className={`h-3 w-3 animate-pulse rounded-full ${status === "online" ? "bg-green-400" : "bg-red-500"}`}/>
                );
            }
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
        <DataCard title="Drivers" isLoading={isLoading}>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}