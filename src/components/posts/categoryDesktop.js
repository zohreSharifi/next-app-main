"use client"
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CategoryDesktop = ({categoryData}) => {
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      
            <div className="bg-white overflow-hidden rounded-3xl">
                {/*acordion heeder*/}
                <div
                    className="flex justify-between items-center bg-purple-200 mb-2 p-4 cursor-pointer"
                    onClick={()=>setIsOpen(!isOpen)}
                >
                    <span>دسته بندی مقالات</span>
                    <span className="flex justify-center items-center">
                        <ChevronDownIcon
                            className={`w-6 h-6 stroke-purple-400 ${
                                isOpen ? "rotate-180 transition-all" : "rotate-0"
                            }`}
                        />
                    </span>
                </div>
                {/*acordion content */}
                <div className={isOpen ? " flex flex-col gap-4 " : "hidden"}>  
                <Link className="mb-1 pr-4 py-2 hover:bg-purple-100 "  href="/blogs">همه مقالات</Link>
                {categoryData && categoryData.map(item=>{
                    return  <Link className="mb-1 pr-4 py-2 hover:bg-purple-100 "  href={`http://localhost:3000/blogs/${item.englishTitle}`}>{item.title}</Link>
                })}
                    
                </div>
            </div>
        
    );
};

export default CategoryDesktop;

  

