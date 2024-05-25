"use client"

import {useGetLocationsLocationAllGet} from "@/shared/api/location/location";
import {ColumnDef} from "@tanstack/table-core";
import {LocationOutput} from "@/shared/api/model";
import {Checkbox} from "@/shared/ui/checkbox";
import {DataTable} from "@/widgets/data-table";

export const LocationsTable = () => {
    const {data: locations, isLoading} = useGetLocationsLocationAllGet({query: {queryKey: ["locations"]}})
    const data = locations || []
    const columns: ColumnDef<LocationOutput>[] = [
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
            enableColumnFilter: false
        },
        {
            accessorKey: "name",
            header: "Name",
        }
    ]
    return <DataTable columns={columns} data={data} isLoading={isLoading}/>
}