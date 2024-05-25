import {DataCard} from "@/widgets/data-card";
import {ColorsTable} from "@/features/get-colors";
import {Metadata} from "next";
import {CreateColor} from "@/shared/dialogs/color";
import {CreateColorButton} from "@/features/create-color";

export const metadata: Metadata = {
    title: "Colors"
};


export default function Page() {
    return (
        <DataCard title="Colors" button={<CreateColorButton/>}>
            <CreateColor/>
            <ColorsTable/>
        </DataCard>
    )
}