import Link from "next/link";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

const SortBar = () => {
    return (
        <main className="">
            <div className="flex gap-x-2 items-center">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <span href="#" className="">
                    مرتب سازی:
                </span>
                <ul className="flex gap-x-4 py-2">
                    <li>
                        <Link
                            href="#"
                            className="text-gray-700 py-4 hover:border-b-2  hover:text-purple-700 transition-all  hover:border-b-purple-700 "
                        >
                            جدیدترین
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="text-gray-700 py-4 hover:border-b-2  hover:text-purple-700 transition-all  hover:border-b-purple-700"
                        >
                            پر بازدیدترین
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="text-gray-700 py-4 hover:border-b-2  hover:text-purple-700 transition-all  hover:border-b-purple-700"
                        >
                            محبوب ترین
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default SortBar;
