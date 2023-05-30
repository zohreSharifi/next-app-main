import Link from "next/link";

const CategoryMobile = ({ categoryData}) => {
    return (
        <div className="md:hidden flex gap-x-4 overflow-auto pb-5">
            <Link
                className="px-3 py-1 whitespace-nowrap text-sm text-gray-500 border border-gray-500 rounded-3xl  hover:border-purple-400  hover:text-purple-600 transition duatrion-300"
                href="#"
            >
                همه مقالات
            </Link>
            {categoryData &&
                categoryData.map((item) => {
                    return (
                        <Link
                            className=" px-3 py-1 text-sm whitespace-nowrap text-gray-500 border border-gray-500 rounded-3xl   hover:border-purple-400 hover:text-purple-600 transition-all duration-300 "
                            href={`http://localhost:3000/blogs/${item.englishTitle}`}
                        >
                            {item.title}
                        </Link>
                    );
                })}
        </div>
    );
};

export default CategoryMobile;
