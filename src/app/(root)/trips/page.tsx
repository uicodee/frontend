import {DataCard} from "@/widgets/data-card";
import {TripsTable} from "@/features/get-trips";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Trips"
};


export default function Page() {
    return (
        <DataCard title="Trips">
            <TripsTable/>
        </DataCard>
    )
}