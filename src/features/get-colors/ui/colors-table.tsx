"use client"

import {useDeleteCarColorDeleteDelete, useGetColorsColorAllGet} from "@/shared/api/color/color";
import {ColumnDef} from "@tanstack/table-core";
import {ColorOutput} from "@/shared/api/model";
import {DataTable} from "@/widgets/data-table";
import {Checkbox} from "@/shared/ui/checkbox";
import {useQueryClient} from "@tanstack/react-query";

export const ColorsTable = () => {
    const {data: colors, isLoading} = useGetColorsColorAllGet({query: {queryKey: ["colors"]}})
    const data = colors || []
    const queryClient = useQueryClient();
    const mutation = useDeleteCarColorDeleteDelete({
        mutation: {
            onSuccess: () => {
                void queryClient.invalidateQueries({queryKey: ["colors"]})
            }
        }
    })
    const columns: ColumnDef<ColorOutput>[] = [
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
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Select row"
                />
            )
        },
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
    return <DataTable columns={columns} data={data} isLoading={isLoading}
                      onDelete={(data) => mutation.mutate({data: data.map(item => item.id)})}/>
}
