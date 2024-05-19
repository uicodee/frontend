import {Metadata} from "next";
import {DataCard} from "@/widgets/data-card";
import {ColumnDef} from "@tanstack/table-core";
import {DataTable} from "@/widgets/data-table";

export const metadata: Metadata = {
    title: "Drivers"
};

type Driver = {
    fullName: string;
    car: string;
    carNumber: string
}

export default function Page() {
    const data: Driver[] = [
        {
            fullName: "Abduxalilov Abduxalil",
            car: "Chevrolet Cobalt",
            carNumber: "B228VA"
        },
        {
            fullName: "Rustamov Axror",
            car: "Chevrolet Cobalt",
            carNumber: "B228VA"
        }
    ];
    const columns: ColumnDef<Driver>[] = [
        {
            accessorKey: "fullName",
            header: "Fullname",
        },
        {
            accessorKey: "car",
            header: "Car",
        },
        {
            accessorKey: "carNumber",
            header: "Car number",
        }
    ]
    return (
        <DataCard title="Drivers" isLoading={true}>
            {/*<Table>*/}
            {/*    <TableHeader>*/}
            {/*        <TableRow>*/}
            {/*            <TableHead>Fullname</TableHead>*/}
            {/*            <TableHead>Status</TableHead>*/}
            {/*            <TableHead className="hidden md:table-cell">*/}
            {/*                Created at*/}
            {/*            </TableHead>*/}
            {/*            <TableHead className="hidden md:table-cell">*/}
            {/*                Trips*/}
            {/*            </TableHead>*/}
            {/*            <TableHead>*/}
            {/*                <span className="sr-only">Actions</span>*/}
            {/*            </TableHead>*/}
            {/*        </TableRow>*/}
            {/*    </TableHeader>*/}
            {/*    <TableBody>*/}
            {/*        <TableRow>*/}
            {/*            <TableCell className="font-medium">*/}
            {/*                Abduxalilov Abduxalil*/}
            {/*            </TableCell>*/}
            {/*            <TableCell>*/}
            {/*                <Badge variant="success">Active</Badge>*/}
            {/*            </TableCell>*/}
            {/*            <TableCell className="font-medium">*/}
            {/*                2.05.2024*/}
            {/*            </TableCell>*/}
            {/*            <TableCell className="hidden md:table-cell">*/}
            {/*                300*/}
            {/*            </TableCell>*/}
            {/*            <TableCell>*/}
            {/*                <DropdownMenu>*/}
            {/*                    <DropdownMenuTrigger asChild>*/}
            {/*                        <Button*/}
            {/*                            aria-haspopup="true"*/}
            {/*                            size="icon"*/}
            {/*                            variant="ghost"*/}
            {/*                        >*/}
            {/*                            <MoreHorizontal className="h-4 w-4"/>*/}
            {/*                            <span className="sr-only">Toggle menu</span>*/}
            {/*                        </Button>*/}
            {/*                    </DropdownMenuTrigger>*/}
            {/*                    <DropdownMenuContent align="end">*/}
            {/*                        <DropdownMenuLabel>Actions</DropdownMenuLabel>*/}
            {/*                        <DropdownMenuItem>Edit</DropdownMenuItem>*/}
            {/*                        <DropdownMenuItem>Delete</DropdownMenuItem>*/}
            {/*                    </DropdownMenuContent>*/}
            {/*                </DropdownMenu>*/}
            {/*            </TableCell>*/}
            {/*        </TableRow>*/}
            {/*    </TableBody>*/}
            {/*</Table>*/}
            <DataTable columns={columns} data={data}/>
        </DataCard>
    )
}