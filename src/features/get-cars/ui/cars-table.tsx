"use client"

import {DataTable} from "@/widgets/data-table";
import {useGetCarsCarAllGet} from "@/shared/api/car/car";
import {ColumnDef} from "@tanstack/table-core";
import {Car} from "@/shared/api/model";
import {Checkbox} from "@/shared/ui/checkbox";
import {useViewCar} from "@/features/view-car";

export const CarsTable = () => {
    const setOpen = useViewCar((state) => state.setOpen)
    const setCar = useViewCar((state) => state.setCar)
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
        onRowClick={() => setOpen(true)}
        setData={(car) => setCar(car)}
    />
}