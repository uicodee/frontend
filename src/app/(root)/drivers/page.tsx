import {DataCard} from "@/widgets/data-card";
import {DriversTable} from "@/features/get-drivers";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Drivers"
};

export default function Page() {
    return (
        <DataCard title="Drivers">
            <DriversTable/>
        </DataCard>
    )
}