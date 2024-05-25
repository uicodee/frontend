"use client"

// import {Metadata} from "next";
import {useGetCarsCarAllGet} from "@/shared/api/car/car";
import {ColumnDef} from "@tanstack/table-core";
import {Car} from "@/shared/api/model";
import {DataCard} from "@/widgets/data-card";
import {CreateCar} from "@/shared/dialogs/car";
import {DataTable} from "@/widgets/data-table";
import {CreateCarButton} from "@/features/create-car";
import {Checkbox} from "@/shared/ui/checkbox";
import {UpdateCar} from "@/shared/dialogs/car/update-car";
import {AspectRatio} from "@/shared/ui/aspect-ratio";


// export const metadata: Metadata = {
//     title: "Cars"
// };


export default function Page() {
    // const setOpen = useUpdateCar((state) => state.setOpen)
    const {data: cars, isLoading} = useGetCarsCarAllGet({query: {queryKey: ["cars"]}})
    const data = cars || []
    const columns: ColumnDef<Car>[] = [
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
            ),
            enableColumnFilter: false,
            enableHiding: false,
            enableSorting: false,
            enableGlobalFilter: false
        },
        {
            accessorKey: "photo",
            header: "Photo",
            cell: ({row}) => (
                <div className="w-[200px]">
                    <AspectRatio ratio={16 / 9} className="bg-muted rounded-md">
                        <img
                            src={row?.original?.photo as string}
                            alt={row.original.name}
                            className="object-cover"/>
                    </AspectRatio>
                </div>
            ),
        },
        {
            accessorKey: "name",
            header: "Name"
        },
        {
            accessorKey: "numberOfSeats",
            header: "Seat count",
        },
    ]
    return (
        <DataCard title="Cars" button={<CreateCarButton/>} isLoading={isLoading}>
            <CreateCar/>
            <UpdateCar/>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}
