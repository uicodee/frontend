import {create} from 'zustand'
import {LocationOutput} from "@/shared/api/model";

interface ViewLocationState {
    open: boolean
    location: LocationOutput
    setOpen: (open: boolean) => void,
    setLocation: (location: LocationOutput) => void,
}

export const useViewLocation = create<ViewLocationState>()((set) => ({
    open: false,
    location: {} as LocationOutput,
    setOpen: (open) => set(() => ({open: open})),
    setLocation: (location: LocationOutput) => set(() => ({location: location}))
}))
