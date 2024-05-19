"use client"

import {DataCard} from "@/widgets/data-card";
import {DataTable} from "@/widgets/data-table";
import {ColumnDef} from "@tanstack/table-core";
import {CreateLocationButton} from "@/features/create-location";
import {CreateLocation} from "@/shared/dialogs/location";
import {useGetLocationsLocationAllGet} from "@/shared/api/location/location";
import {LocationOutput} from "@/shared/api/model";

// export const metadata: Metadata = {
//     title: "Locations"
// };


export default function Page() {
    const {data: locations, isLoading} = useGetLocationsLocationAllGet({query: {queryKey: ["locations"]}})
    const data = locations || []
    const columns: ColumnDef<LocationOutput>[] = [
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