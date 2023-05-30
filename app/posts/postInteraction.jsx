import { BookmarkIcon,HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon,BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { toPersianDigits } from "../utils/toPersianDigits";
const PostInteraction=({post,isSmall})=>{
    const iconSize=`${isSmall ? "w-4 h-4 "  : "w-6 h-6"}`
    return(
        <div className={`flex justify-evenly items-center ${isSmall ? "gap-x-2" : "gap-x-4"}`}>
        <button className={`bg-gray-200 p-0.5 rounded  gap-x-1 flex  items-center ` }>
            <ChatBubbleLeftEllipsisIcon className={`stroke-gray-500 ${iconSize} `} />
            <span className="text-xs font-bold text-gray-500 leading-3">
             {toPersianDigits(post.commentsCount) }
            </span>
        </button>
        <button className="bg-red-100  p-0.5 rounded  flex  gap-x-1 items-center text-red-500 hover:bg-red-500 hover:text-red-100 transition-all ">
           {post.isLiked ? <SolidHeartIcon className={`${iconSize} fill-current  `}/> : <HeartIcon className={`${iconSize}stroke-current`} />}
            <span className="text-xs font-bold  leading-3 ">
              {toPersianDigits(post.likesCount)}
            </span>
        </button>
       <button className="bg-blue-100  text-blue-500 p-0.5 rounded  flex items-center hover:bg-blue-500 hover:text-white transition-all">
       {post.isBookmarked ? <SolidBookmarkIcon className={`${iconSize} fill-current`} /> : <BookmarkIcon className={`${iconSize} stroke-current`}/> }
       </button>

    </div>
    )
    
}
export default PostInteraction