import type { Post } from "@/services/feedService"
import { Card, CardContent, CardHeader } from "./ui/card"
import OptionPostAdmin from "./OptionPostAdmin"

type Props = {
    isAdmin?: boolean
    post: Post
}

function ItemPost({ isAdmin, post }: Props) {
    return (
        <Card className="p-3 w-full max-w-xl">
            {isAdmin && <OptionPostAdmin user={post} />}
            <CardHeader>
                <div className="flex space-x-2">
                    <div>{post.name}</div>
                    <div className="text-neutral-400">|</div>
                    <div className="text-neutral-400">{post.username}</div>
                </div>
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