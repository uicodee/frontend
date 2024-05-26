"use client"

import {useGetPromocodesPromocodeAllGet} from "@/shared/api/promocode/promocode";
import {ColumnDef} from "@tanstack/table-core";
import {PromocodeOutput} from "@/shared/api/model";
import {Checkbox} from "@/shared/ui/checkbox";
import {DataTable} from "@/widgets/data-table";

export const PromocodesTable = () => {
    const {data: promocodes, isLoading} = useGetPromocodesPromocodeAllGet({query: {queryKey: ["promocodes"]}});
    const data = promocodes || []
    const columns: ColumnDef<PromocodeOutput>[] = [
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
            accessorKey: "promocode",
            header: "Promocode",
        },
        {
            accessorKey: "value",
            header: "Value",
            cell: ({row}) => (
                row.original.type === "amount" ? row.original.value + " so'm" : row.original.value + "%"
            )
        },
        {
            accessorKey: "expiresAt",
            header: "Expires at",
        }
    ]
    return <DataTable columns={columns} data={data} onDelete={() => console.log("delete")} isLoading={isLoading}/>
}