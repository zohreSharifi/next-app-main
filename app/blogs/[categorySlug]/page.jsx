import PostList from "../../postList/postList";
import SortBar from "../../../src/components/posts/sortBar";
import CategoryMobile from "../../../src/components/posts/categoryMobile";
import CategoryDesktop from "../../../src/components/posts/categoryDesktop";


const getPost = async (categorySlug) => {
    
    const res = await fetch(`http://localhost:5000/api/posts?page=1&limit=6&categorySlug=${categorySlug}`);
    const post= await res.json()
    return (post);
};

const getAllCategories = async () => {
    const res = await fetch("http://localhost:5000/api/post-category");
    const categories= await res.json()
   return (categories);
};


export default async function categoryPage({params}){
    const postData=await getPost(params.categorySlug)
    const categoryData=await getAllCategories()

    return (
        <section className="grid gap-4 md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)]">
         
            {/* side bar */}
            <CategoryMobile categoryData={categoryData.data} />
            <div className="hidden md:flex md:col-span-3 md:row-span-2  ">
                <CategoryDesktop categoryData={categoryData.data} />
            </div>
            {/* sort bar */}
            <div className="bg-white rounded-3xl px-4 row-span-1 col-span-9 hidden md:flex items-center">
                <SortBar />
            </div>
            {/* blogs */}
            <div className="  col-span-9 row-span-1">
                <PostList data={postData.data.docs} />
            </div>
        </section>
    );
};


