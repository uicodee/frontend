"use client"

import {DataTable} from "@/widgets/data-table";
import {useDeleteCarCarDeleteDelete, useGetCarsCarAllGet} from "@/shared/api/car/car";
import {ColumnDef} from "@tanstack/table-core";
import {Car} from "@/shared/api/model";
import {Checkbox} from "@/shared/ui/checkbox";
import {useViewCar} from "@/features/view-car";
import {useQueryClient} from "@tanstack/react-query";

export const CarsTable = () => {
    const setOpen = useViewCar((state) => state.setOpen)
    const setCar = useViewCar((state) => state.setCar)
    const {data: cars, isLoading} = useGetCarsCarAllGet({query: {queryKey: ["cars"]}})
    const data = cars || []
    const queryClient = useQueryClient();
    const mutation = useDeleteCarCarDeleteDelete({
        mutation: {
            onSuccess: () => {
                void queryClient.invalidateQueries({queryKey: ["cars"]})
            }
        }
    })
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
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Select row"
                />
            )
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
    return <DataTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        onDelete={(data: Car[]) => mutation.mutate({data: data.map(item => item.id)})}
        onRowClick={() => setOpen(true)}
        setData={(car) => setCar(car)}
    />
}