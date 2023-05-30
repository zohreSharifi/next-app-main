import { toPersianDigits } from "@/app/utils/toPersianDigits";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import PostInteraction from "../posts/postInteraction"
const PostList = ({data}) => {
    return(
        <main className="grid grid-cols-6 gap-8">
         
        {data &&
            data.map((blog) => {
             
                return (
                    <section className=" col-span-6 md:col-span-3 lg:col-span-2 p-4 rounded-xl flex flex-col ">
                        {/* cover image  */}
                        <div className="aspect-w-16 aspect-h-9 mb-2">
                            <Link href={`http://localhost:3000/posts/${blog.slug}/${blog.hashId}`}>
                            <img
                                src={blog.coverImage}
                                className="w-full h-full object-center rounded-2xl object-cover"
                                alt="image"
                            />
                            </Link>
                            
                        </div>
                        {/*  blog content */}
                        <div className="bg-gray-50  p-2 rounded-2xl flex flex-1 flex-col  justify-between">
                        <Link href={`http://localhost:3000/posts/${blog.slug}`}>
                           
                            <h2 className="mb-4 font-bold">{blog.title}</h2>
                            </Link>
                            
                            {/* blog detail */}
                            <div>
                                <div className="flex  items-center justify-between mb-2">
                                    <div className="flex gap-2 items-center">
                                        <img
                                            src="/images/saheb.webp"
                                            className="w-6 h-6 hover:ring-2  rounded-full"
                                        />

                                        <span className="text-gray-500 test-sm ">
                                            {blog.author.name}
                                        </span>
                                    </div>
                                    <Link href={`http://localhost:3000/blogs/${blog.category.englishTitle}`} className="text-xs border rounded-xl px-2 py-1 bg-blue-100 text-blue-600  hover:bg-blue-600 hover:text-blue-100 transition-all cursor-pointer duration-300">
                                        {blog.category.title}
                                    </Link>
                                </div>
                                <div className="flex items-center justify-between">
                                  <PostInteraction post={blog} isSmall/>
                                    <div className="flex justify-center  items-center">
                                        <ClockIcon className="w-4 h-4 stroke-gray-400" />
                                        <span className="text-gray-400 text-xs ">
                                            زمان مطالعه: {toPersianDigits(blog.readingTime)} دقیقه
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })
            }
    </main>
    )
       
 

  
};

export default PostList;
