import SingleComment from "./singleComment"

export default function ReplyComment({comments,parentId}){
    return (
        <div>
            {comments.map(comment=>{
               
                return(
                    comment.responseTo===parentId && (
                        <div className="mr-5">
                        <SingleComment comment={comment} key={comment._id} />
                        <ReplyComment comments={comments} parentId={comment._id} />
                    </div>
                    )
                )
            })}
        </div>
    )
}