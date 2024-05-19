import {create} from 'zustand'

interface CreateLocationState {
    open: boolean
    setOpen: (open: boolean) => void
}

export const useCreateLocation = create<CreateLocationState>()((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open: open})),
}))