import PostList from "../postList/postList";
import SortBar from "../../src/components/posts/sortBar";
import CategoryMobile from "../../src/components/posts/categoryMobile";
import CategoryDesktop from "../../src/components/posts/categoryDesktop";

const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/api/post-category");
    const categories= await res.json()
   return (categories);
};
const getAllposts=async()=>{
    const res = await fetch("http://localhost:5000/api/posts?page=1&limit=6");
    const posts=await res.json()
    return(posts)
}
export default async function BlogPage(){
    const categoriesData=await getAllCategories()
    const postsData=await getAllposts()
    return (
        <section className="grid  gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)]">
            {/* side bar */}
            <CategoryMobile categoryData={categoriesData.data} postData={postsData.data.docs} />
            <div className="hidden md:flex md:col-span-3 md:row-span-2  ">
                <CategoryDesktop categoryData={categoriesData.data} postData={postsData.data.docs} />
            </div>
            {/* sort bar */}
            <div className="bg-white rounded-3xl px-4 row-span-1 col-span-9 hidden md:flex items-center">
                <SortBar />
            </div>
            {/* blogs */}
            <div className="  col-span-9 row-span-1">
                <PostList data={postsData.data.docs} />
            </div>
        </section>
    );
};


