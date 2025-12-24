import { Quote } from "lucide-react"

export type Quote = {
    quote: string,
    author: string
}

//const pathURL = 'http://localhost:3000/api/quote' //estoy usando esta para desarrollo pq en mi casa no hay corriente
const pathURL = 'https://api.breakingbadquotes.xyz/v1/quotes'//esta es la oricha

type QuoteService = {
    getQuote: () => Promise<Quote>
}

export const useQuoteService:QuoteService = {
    getQuote: async () => {
        const res = await fetch(pathURL)
        const data =  await res.json()
        const quote:Quote = data[0]
        return quote
    }
}