import {create} from 'zustand'

interface CreatePromocodeState {
    open: boolean
    setOpen: (open: boolean) => void
}

export const useCreatePromocode = create<CreatePromocodeState>()((set) => ({
    open: false,
    setOpen: (open) => set(() => ({open: open})),
}))