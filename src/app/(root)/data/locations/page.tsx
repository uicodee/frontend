"use client"

import {DataCard} from "@/widgets/data-card";
import {DataTable} from "@/widgets/data-table";
import {ColumnDef} from "@tanstack/table-core";
import {CreateLocationButton} from "@/features/create-location";
import {CreateLocation} from "@/shared/dialogs/location";
import {useGetLocationsLocationAllGet} from "@/shared/api/location/location";
import {LocationOutput} from "@/shared/api/model";
import {Checkbox} from "@/shared/ui/checkbox";

// export const metadata: Metadata = {
//     title: "Locations"
// };


export default function Page() {
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

    return (
        <DataCard title="Locations" button={<CreateLocationButton/>} isLoading={isLoading}>
            <CreateLocation/>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}