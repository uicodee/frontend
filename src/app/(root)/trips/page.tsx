import {Metadata} from "next";
import {DataCard} from "@/widgets/data-card";
import {DataTable} from "@/widgets/data-table";
import {ColumnDef} from "@tanstack/table-core";

export const metadata: Metadata = {
    title: "Trips"
};

type Trip = {
    fromLocation: string;
    toLocation: string;
    driver: string;
    price: number;
    duration: string;
    rating: number
}

export default function Page() {
    const data: Trip[] = [
        {
            fromLocation: "Tashkent",
            toLocation: "Ferghana",
            driver: "Abduxalilov Abduxalil",
            price: 100000,
            duration: "3 hours",
            rating: 4
        }
    ];
    const columns: ColumnDef<Trip>[] = [
        {
            accessorKey: "fromLocation",
            header: "From",
        },
        {
            accessorKey: "toLocation",
            header: "To",
        },
        {
            accessorKey: "driver",
            header: "Driver",
        },
        {
            accessorKey: "price",
            header: "Price",
        },
        {
            accessorKey: "duration",
            header: "Duration",
        },
        {
            accessorKey: "rating",
            header: "Rating",
        }
    ]
    return (
        <DataCard title="Trips" isLoading={true}>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}