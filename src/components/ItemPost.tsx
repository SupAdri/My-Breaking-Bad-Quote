import type { Post } from "@/services/feedService"
import { Card, CardContent, CardHeader } from "./ui/card"

type Props = {
    post: Post
}

function ItemPost({ post }: Props) {
    return (
        <Card className="p-3 w-full max-w-xl">
            <CardHeader className="flex">
                <div>{post.name}</div>
                <div className="text-neutral-400">|</div>
                <div className="text-neutral-400">{post.username}</div>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="text-2xl italic flex justify-start">"{post.quote.quote}"</div>
                    <div className="text-neutral-400 m-2 text-end">{post.quote.author}</div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ItemPost