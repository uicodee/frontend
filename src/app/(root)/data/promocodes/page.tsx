import {Metadata} from "next";
import {DataCard} from "@/widgets/data-card";
import {PromocodesTable} from "@/features/get-promocodes";
import {CreatePromocode} from "@/shared/dialogs/promocode";
import {CreatePromocodeButton} from "@/features/create-promocode";

export const metadata: Metadata = {
    title: "Promocodes"
};

export default function Page() {
    return (
        <DataCard title="Promocodes" button={<CreatePromocodeButton/>}>
            <CreatePromocode/>
            <PromocodesTable/>
        </DataCard>
    )
}