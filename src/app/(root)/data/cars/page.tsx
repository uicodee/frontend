import {Metadata} from "next";
import {CreateCarButton} from "@/features/create-car"
import {CreateCar} from "@/shared/dialogs/car"
import {UpdateCar} from "@/shared/dialogs/car/update-car"
import {DataCard} from "@/widgets/data-card"
import {CarsTable} from "@/features/get-cars";
import {ViewCar} from "@/features/view-car";


export const metadata: Metadata = {
    title: "Cars"
};


export default function Page() {

    return (
        <DataCard title="Cars" button={<CreateCarButton/>}>
            <CreateCar/>
            <ViewCar/>
            <UpdateCar/>
            <CarsTable/>
        </DataCard>
    )
}
