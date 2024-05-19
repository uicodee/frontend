import {Metadata} from "next";
import {DataCard} from "@/widgets/data-card";
import {ColumnDef} from "@tanstack/table-core";
import {DataTable} from "@/widgets/data-table";

export const metadata: Metadata = {
    title: "Users"
};

type User = {
    fullName: string;
    createdAt: string;
    trips: number
}

export default function Page() {
    const data: User[] = [
        {
            fullName: "Abduxalilov Abduxalil",
            createdAt: "05.05.2024",
            trips: 300
        },
        {
            fullName: "Rustamov Axror",
            createdAt: "01.05.2024",
            trips: 150
        }
    ];
    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "fullName",
            header: "Fullname",
        },
        {
            accessorKey: "createdAt",
            header: "Created At",
        },
        {
            accessorKey: "trips",
            header: "Trips",
        }
    ]
    return (
        <DataCard title="Users" isLoading={true}>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}