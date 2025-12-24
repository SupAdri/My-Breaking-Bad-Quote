import { create } from 'zustand'
import { useQuoteService, type Quote } from '@/services/quoteService'

type QuoteStore = {
    quote: Quote | null,
    loading: boolean
    getQuote: () => void
    setQuote: (quote: Quote | null) => void
}

export const useQuote = create<QuoteStore>((set) => ({
    quote: null,
    loading: false,
    getQuote: async () => {
        set(() => ({
            quote: null,
            loading: true
        }))
        const quote = await useQuoteService.getQuote()
        set(() => ({
            quote: quote,
            loading: false
        }))
    },
    setQuote: (quote) => set(() => ({
        quote: quote
    }))
}))