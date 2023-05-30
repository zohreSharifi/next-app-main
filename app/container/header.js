import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
    return (
        <main className="bg-white p-4 w-full mb-4">
            <nav className="flex justify-between items-center  container mx-auto lg:max-w-screen-xl ">
                <section>
                    <Bars3Icon className=" w-8 h-8 stroke-purple-900 md:hidden" />
                    <ul className="hidden md:flex  md:gap-3">
                        <li>
                            <Link href="#">خانه</Link>
                        </li>
                        <li>
                            <Link href="#">دوره های آموزشی</Link>
                        </li>
                        <li>
                            <Link href="#">بلاگ ها</Link>
                        </li>
                        <li>
                            <Link href="#">درباره ما</Link>
                        </li>
                    </ul>
                </section>
                <section className="flex gap-3 ab">
                    <div className="">
                        <ShoppingCartIcon className="w-8 h-8 stroke-purple-900 " />
                        <div className=" absolute  top-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className=" font-sm text-white">0</span>
                        </div>
                    </div>
                    <div>
                        <UserCircleIcon className="w-9 h-9 stroke-gray-400" />
                    </div>
                </section>
            </nav>
        </main>
    );
};

export default Header;
