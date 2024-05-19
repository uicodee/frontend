"use client"

// import {Metadata} from "next";
import {useGetCarsCarAllGet} from "@/shared/api/car/car";
import {ColumnDef} from "@tanstack/table-core";
import {Car} from "@/shared/api/model";
import {DataCard} from "@/widgets/data-card";
import {CreateCar} from "@/shared/dialogs/car";
import {DataTable} from "@/widgets/data-table";
import {CreateCarButton} from "@/features/create-car";

// export const metadata: Metadata = {
//     title: "Cars"
// };


export default function Page() {
    const {data: cars, isLoading} = useGetCarsCarAllGet()
    const data = cars || []
    const columns: ColumnDef<Car>[] = [
        {
            accessorKey: "name",
            header: "Name"
        },
        {
            accessorKey: "numberOfSeats",
            header: "Seat count",
        }
    ]
    return (
        <DataCard title="Cars" button={<CreateCarButton/>} isLoading={isLoading}>
            <CreateCar/>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}
