import {create} from 'zustand'

interface CreateCarState {
    open: boolean
    setOpen: (open: boolean) => void
}

export const useCreateCar = create<CreateCarState>()((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open: open})),
}))