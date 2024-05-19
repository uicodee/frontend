"use client"

import {DataCard} from "@/widgets/data-card";
import {ColumnDef} from "@tanstack/table-core";
import {DataTable} from "@/widgets/data-table";
import {cn} from "@/shared/ui/utils";
import {useGetColorsColorAllGet} from "@/shared/api/color/color";
import {ColorOutput} from "@/shared/api/model";


export default function Page() {
    const {data: colors, isLoading} = useGetColorsColorAllGet()
    const data = colors || []
    const columns: ColumnDef<ColorOutput>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "hex",
            header: "Color",
            cell: ({row}) => {
                return <div className={cn("h-6 w-6 rounded-full")}>{row.original.hex}</div>
            }
        }
    ]
    return (
        <DataCard title="Colors" isLoading={isLoading}>
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}