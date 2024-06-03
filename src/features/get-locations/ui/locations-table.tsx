"use client"

import {useDeleteLocationLocationDeleteDelete, useGetLocationsLocationAllGet} from "@/shared/api/location/location";
import {ColumnDef} from "@tanstack/table-core";
import {LocationOutput} from "@/shared/api/model";
import {Checkbox} from "@/shared/ui/checkbox";
import {DataTable} from "@/widgets/data-table";
import {useViewLocation} from "@/features/view-location";
import {useQueryClient} from "@tanstack/react-query";

export const LocationsTable = () => {
    const setOpen = useViewLocation((state) => state.setOpen)
    const setLocation = useViewLocation((state) => state.setLocation)

    const {data: locations, isLoading} = useGetLocationsLocationAllGet({query: {queryKey: ["locations"]}})
    const data = locations || []
    const queryClient = useQueryClient();
    const mutation = useDeleteLocationLocationDeleteDelete({
        mutation: {
            onSuccess: () => {
                void queryClient.invalidateQueries({queryKey: ["locations"]})
            }
        }
    })
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
                    onClick={(e) => e.stopPropagation()}
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
    return <DataTable
        columns={columns}
        data={data}
        isLoading={isLoading}
        onDelete={(locations) => mutation.mutate({data: locations.map((item) => item.id)})}
        onRowClick={() => setOpen(true)}
        setData={(location) => setLocation(location)}/>
}