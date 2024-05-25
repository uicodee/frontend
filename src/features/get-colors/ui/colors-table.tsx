"use client"

import {useGetColorsColorAllGet} from "@/shared/api/color/color";
import {ColumnDef} from "@tanstack/table-core";
import {ColorOutput} from "@/shared/api/model";
import {DataTable} from "@/widgets/data-table";

export const ColorsTable = () => {
    const {data: colors, isLoading} = useGetColorsColorAllGet({query: {queryKey: ["colors"]}})
    const data = colors || []
    const columns: ColumnDef<ColorOutput>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "hex",
            header: "Color",
            cell: ({getValue}) => {
                const hex = getValue<string>();
                return (
                    <div className="flex h-6 w-6 rounded-full" style={{backgroundColor: hex}}/>
                );
            }
        }
    ]
    return <DataTable columns={columns} data={data} isLoading={isLoading}/>
}
