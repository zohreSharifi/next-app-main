import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmarkIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { toPersianDigits } from "../../../utils/toPersianDigits";
import PostInteraction from "../../postInteraction";
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import PostList from "../../../postList/postList";
import PostComments from "../../postComments/page";
import { toLocalDate } from "../../../utils/toLocalDate";

const getPostBySlug = async (postSlug) => {
    const res = await fetch(`http://localhost:5000/api/posts/${postSlug}`);
    // fetch("http://localhost:5000/api/posts/node.js")
    
  
    // fetch("http://localhost:5000/api/posts/chyst-karbrd-rydaks");
    const postData = res.json();
    return postData;
};

export default async function SinglePostPage({ params }) {
    const { data: post } = await getPostBySlug(params.postSlug);
        console.log(post,".............poooost")   
    let isShow = false;
    // const [copied,setCopied]=useState(false)
    const copyHandler = () => {
        isShow = true;
        setTimeout(() => {
            isShow = false;
        }, 1000);
        return isShow;
    };

    return (
        <div className="">
            <header className="flex flex-col gap-y-5 md:flex md:flex-row md:justify-between md:items-start mb-12 mx-auto max-w-screen-md">
                {/* author data */}
                <div className="flex  items-center  mb-2">
                    <div className="flex gap-2 items-center">
                        <img
                            src="/images/saheb.webp"
                            className="w-14 h-14 md:w-20 md:h-20 hover:ring-2  hover:ring-white rounded-full"
                            alt={post.author.name}
                        />

                        <div className="flex flex-col mr-4 gap-2 justify-between">
                            <div className="flex gap-x-2">
                                <span className=" ">{post.author.name}</span>
                                <Link
                                    href={`http://localhost:3000/blogs/${post.category.englishTitle}`}
                                    className="text-xs border rounded-xl px-2 py-1 bg-blue-100 text-blue-600  hover:bg-blue-600 hover:text-blue-100 transition-all cursor-pointer duration-300"
                                >
                                    {post.category.title}
                                </Link>
                            </div>
                            <span className=" text-xs font-normal hidden md:block ">
                                {post.author.biography}
                            </span>
                            <div className="flex text-gray-400 test-sm font-normal items-center">
                                <span className="text-sm">{toLocalDate(post.createdAt)}</span>
                                <span className="mx-1">&bull;</span>
                                <div className="text-sm ">
                                    <span>خواندن :</span>
                                    <span> {toPersianDigits(post.readingTime)} </span>
                                    <span>دقیقه</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* interactions button */}
                <div className="flex gap-2 items-center">
                    <LinkIcon className="w-6 h-6 stroke-gray-500 hover:text-block" />
                    <button className=" border rounded-full px-3 py-1  mr-4 text-slate-500 border-gray-300 hover:text-gray-600 flex items-center cursor-pointer">
                        <span className="text-gray-400 text-xs ">
                            {!post.isBookmarked ? "ذخیره" : "ذخیره شده"}
                        </span>
                        {post.isBookmarked ? (
                            <SolidBookmarkIcon className="w-6 h-6 fill-current" />
                        ) : (
                            <BookmarkIcon className="w-6 h-6 stroke-current" />
                        )}
                    </button>
                </div>
            </header>
            <div className="max-w-screen-md mx-auto">
                <main
                    className="mb-8 prose prose-xl prose-slate
                              prose-h1:text-xl md:prose-h1:text-3xl 
                              prose-h1:font-black prose-h2:text-xl md:prode-h2:text-2xl prose-h2:font-extrabold prose-p:text-base md:prose-p:text-lg prose-p:leading-8 md:prose-p:leading-10 prose-img:rounded-xl prose-a:text-blue-500"
                >
                    <h1>{post.title}</h1>
                    <h2>عنوان اول تستی</h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                        آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                        بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                        زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
                        در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                        حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                        اساسا مورد استفاده قرار گیرد.
                    </p>
                    <img src={post.coverImage} />
                    <h2>عنوان دوم تستی</h2>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                        طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                        لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                        بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                        آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
                        بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                        زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
                        در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                        حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                        اساسا مورد استفاده قرار گیرد.
                    </p>
                    <h2>نحوه کانفینگ تیلویند</h2>
                    <p>
                        بدون استفاده از
                        <a href="https://highlightjs.org">highlight.js</a>
                        می توان به سادگی کدها را داخل محتوای بلک ها قرار داد!
                    </p>
                    <p>
                        پس می توان از کد
                        <code>tailwind.config.js</code>
                        استفاده کرد
                    </p>
                    <pre dir="ltr">
                        {`module.exports = {
     theme: {
        // ...
            },
    plugins: [
        require('@tailwindcss/typography'),
          // ...
                ],
                 }`}
                    </pre>
                </main>
                {/* post tags liked,bookmarked */}
                <section className="flex mb-6 gap-x-4">
                    {["جاوااسکریپت", "react", "نکست", "vue.js"].map((tag) => {
                        return (
                            <Link
                                href={`http://localhost:3000/blogs/${tag}`}
                                className="text-sm border rounded-2xl px-2 py-1 bg-gray-200 text-gray-600  hover:bg-gray-100 transition-all cursor-pointer duration-300"
                            >
                                {tag}
                            </Link>
                        );
                    })}
                </section>

                <div className="flex   flex-col gap-y-8 md:flex-row w-full mb-8 border-b-2 border-gray-400 pb-8 justify-evenly md:justify-between">
                    {/* like -comment-bookmark */}
                    <PostInteraction post={post} />
                    <div className="flex  relative">
                        {/* share btns */}
                        <section className=" flex justify-evenly items-center gap-x-3 md:gap-x-4  text-gray-400">
                            <Link
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/posts/${post.slug}/${post.hashId}`}
                            >
                                <IoLogoLinkedin className="w-6 h-6 " />
                            </Link>
                            <Link
                                href={`https://telegram.me/share?text=${post.title}&url=http://localhost:3000/posts/${post.slug}/${post.hashId}`}
                            >
                                <FaTelegram className="w-6 h-6 " />
                            </Link>

                            <Link
                                href={`https://twitter.com/share?text=${post.title}&url=http://localhost:3000/posts/${post.slug}/${post.hashId}`}
                            >
                                <IoLogoTwitter className="w-6 h-6 " />
                            </Link>
                        </section>

                        {/* copyLink */}
                        {/* <CopyToClipboard
                            text={`http://localhost:3000/posts/${post.slug}/${post.hashId}`}
                            onCopy={copyHandler}
                        >
                           <div className="">
                           <span
                                className="text-sm border rounded-2xl px-2 py-1 bg-gray-200 
                              text-gray-600  hover:bg-gray-100 transition-all cursor-pointer duration-300"
                            >
                                کپی لینک
                            </span>
                            <span className={`absolute top-0 left-0 ${isshow ? "block" : "hidden"} bg-blue-500 text-blue-100`}>لینک کپی شد</span>
                           </div>
                        </CopyToClipboard> */}
                    </div>
                </div>
            </div>
            {/* related posts */}
            <div className="lg:max-w-screen-lg mx-auto">
                <section className="mb-20  ">
                    <h2 className="font-extrabold text-2xl md:text-3xl mb-4 ">پستهای مشابه</h2>
                    <PostList data={post.related} />
                </section>
                {/* comments  */}
                <PostComments comments={post.comments} />
            </div>
        </div>
    );
}
