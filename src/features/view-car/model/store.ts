import {create} from 'zustand'
import {Car} from "@/shared/api/model";

interface ViewCarState {
    open: boolean
    car: Car
    setOpen: (open: boolean) => void,
    setCar: (car: Car) => void,
}

export const useViewCar = create<ViewCarState>()((set) => ({
    open: false,
    car: {} as Car,
    setOpen: (open) => set(() => ({open: open})),
    setCar: (car: Car) => set(() => ({car: car}))
}))