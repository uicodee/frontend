"use client"

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useLogoutFromAccountLogoutPost} from "@/shared/api/authentication/authentication";

export default function Page() {
    const router = useRouter();
    const mutation = useLogoutFromAccountLogoutPost({
        mutation: {
            onSuccess: () => {
                localStorage.removeItem('accessToken')
                router.replace('/login')
            }
        }
    })
    useEffect(() => {
        mutation.mutate()
    }, [])
    return <></>
}