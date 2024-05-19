"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/shared/ui/card";
import {Car, CarTaxiFront, Mail, MapPin, TrafficCone, Users} from "lucide-react";
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts";

export default function Home() {
    const data = [
        {
            name: "Jan",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Feb",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Mar",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Apr",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "May",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jun",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jul",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Aug",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Sep",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Oct",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Nov",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Dec",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
    ]
    const datas = [
        {
            name: "Cars",
            value: 100,
            icon: <Car/>
        },
        {
            name: "Locations",
            value: 10,
            icon: <MapPin/>
        },
        {
            name: "Drivers",
            value: 1000,
            icon: <CarTaxiFront/>
        },
        {
            name: "Passengers",
            value: 1000,
            icon: <Users/>
        },
        {
            name: "Trips",
            value: 5,
            icon: <TrafficCone/>
        },
        {
            name: "SMS",
            value: 10000,
            icon: <Mail/>
        }
    ]
    return (
        <div className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                {datas.map((item, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {item.name}
                            </CardTitle>
                            {item.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{item.value}</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 grid-cols-1">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={data}>
                                <XAxis
                                    dataKey="name"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Bar
                                    dataKey="total"
                                    fill="currentColor"
                                    radius={[4, 4, 0, 0]}
                                    className="fill-primary"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
