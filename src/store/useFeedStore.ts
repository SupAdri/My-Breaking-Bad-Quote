import { usePostService, type Post } from "@/services/feedService";
import { create } from "zustand";

type FeedStorage = {
    post: [Post] | null
    getPosts: () => void
}

export const useFeed = create<FeedStorage>((set) => ({
    post: null,
    getPosts: async () => {
        const post = await usePostService.getPosts()
        set(() => ({
            post: post
        }))
    }
}))