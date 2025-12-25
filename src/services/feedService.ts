import type { Quote } from "./quoteService"

const pathURL = 'http://localhost:3000/api'

export type Post = {
    username: string
    name: string
    quote: Quote
}

type PostService = {
    getPosts: () => Promise<[Post]>
}

export const usePostService: PostService = {
    getPosts: async () => {
        const res = await fetch(pathURL + '/feed')
        const data = await res.json()
        const post: [Post] = data
        return post
    }
}