import {DataCard} from "@/widgets/data-card";
import {DriversTable} from "@/features/get-drivers";
import {Metadata} from "next";
import {ViewDriver} from "@/features/view-driver";

export const metadata: Metadata = {
    title: "Drivers"
};

export default function Page() {
    return (
        <DataCard title="Drivers">
            <ViewDriver/>
            <DriversTable/>
        </DataCard>
    )
}