"use client"

import {useGetDriversDriverAllGet} from "@/shared/api/driver/driver";
import {ColumnDef} from "@tanstack/table-core";
import {Driver} from "@/shared/api/model";
import {Check, X} from "lucide-react";
import {DataTable} from "@/widgets/data-table";
import {useViewDriver} from "@/features/view-driver";

export const DriversTable = () => {
    const setOpen = useViewDriver((state) => state.setOpen)
    const setDriver = useViewDriver((state) => state.setDriver)
    const {data: drivers, isLoading} = useGetDriversDriverAllGet()
    const data = drivers || []
    const columns: ColumnDef<Driver>[] = [
        {
            accessorKey: "fullName",
            header: "Fullname",
            enableHiding: false
        },
        {
            accessorKey: "car",
            header: "Car",
            accessorFn: info => info.car.name,
            enableHiding: false
        },
        {
            accessorKey: "carNumber",
            header: "Car number",
            enableHiding: true
        },
        {
            accessorKey: "phoneNumber",
            header: "Phone number",
            enableHiding: true
        },
        {
            accessorKey: "balance",
            header: "Balance",
            enableHiding: false
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
            },
            enableHiding: true
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
            },
            enableHiding: true
        }
    ]
    return <DataTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        onRowClick={() => setOpen(true)}
        setData={(driver) => setDriver(driver)}
    />
}