import {DataCard} from "@/widgets/data-card";
import {UsersTable} from "@/features/get-users";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Users"
};


export default function Page() {
    return (
        <DataCard title="Users">
            <UsersTable/>
        </DataCard>
    )
}