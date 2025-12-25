import ItemPost from "@/components/ItemPost"
import LoadingItem from "@/components/LoadingItem"
import { useFeed } from "@/store/useFeedStore"
import { useEffect } from "react"


function HomeLayout() {
    const { post, getPosts } = useFeed()
    useEffect(() => {
        getPosts()
    },[])

    return (
        <div className="p-10 flex flex-col items-center space-y-4 justify-center">
            {
                post ?
                    post.map((item, i) => (<ItemPost key={i} post={item} />))
                    :
                    Array.from({ length: 4 }).map(() => <LoadingItem />)

            }

        </div>
    )
}

export default HomeLayout