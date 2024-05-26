import {create} from 'zustand'
import {Driver} from "@/shared/api/model";

interface ViewDriverState {
    open: boolean
    driver: Driver
    setOpen: (open: boolean) => void,
    setDriver: (driver: Driver) => void,
}

export const useViewDriver = create<ViewDriverState>()((set) => ({
    open: false,
    driver: {} as Driver,
    setOpen: (open) => set(() => ({open: open})),
    setDriver: (driver: Driver) => set(() => ({driver: driver}))
}))
