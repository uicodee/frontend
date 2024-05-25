import {DataCard} from "@/widgets/data-card";
import {CreateLocationButton} from "@/features/create-location";
import {CreateLocation} from "@/shared/dialogs/location";
import {LocationsTable} from "@/features/get-locations";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Locations"
};


export default function Page() {
    return (
        <DataCard title="Locations" button={<CreateLocationButton/>}>
            <CreateLocation/>
            <LocationsTable/>
        </DataCard>
    )
}