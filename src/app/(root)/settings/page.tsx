import {Metadata} from "next";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/shared/ui/card";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";

export const metadata: Metadata = {
    title: "Settings"
};

export default function Page() {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Trip percent</CardTitle>
                    <CardDescription>
                        Used to identify your store in the marketplace.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <Input type="number" placeholder="Trip percent"/>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter>
            </Card>
        </>
    )
}