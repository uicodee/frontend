import {create} from 'zustand'

interface CreateColorState {
    open: boolean
    setOpen: (open: boolean) => void
}

export const useCreateColor = create<CreateColorState>()((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open: open})),
}))