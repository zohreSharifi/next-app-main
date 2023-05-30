import SingleComment from "../postComments/singleComment";
import CommentForm from "../postComments/commentform";
import ReplyComment from "../postComments/replycomment"
export default function PostComments({ comments }) {
    return (
        <div className="mb-20">
            <h2 className="mb-8 font-bold md:text-2xl">نظرات</h2>

            {comments.map((comment, index) => {
                return (
                    !comment.responseTo
                     &&
                    comment.status === 2 && (
                    <div>
                        <SingleComment comment={comment} key={comment._id} />
                        <ReplyComment comments={comments} parentId={comment._id} />
                    </div>)
                );
            })}

          

            {/* base comment form */}

            <div className="mt-8">
                <CommentForm title="ارسال دیدگاه جدید" style="text-black  font-bold" />
            </div>
        </div>
    );
}
