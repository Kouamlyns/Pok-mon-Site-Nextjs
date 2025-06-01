import{FaRegHeart, FaHeart} from "react-icons/fa";
import Link from "next/link";
const Navbar= () => {
    return (
        <div className="h-[80px] bg-[#Fff]  w-full px-[60px] flex items-center justify-between ">
            <Link href="/">
                <img src="/log.jpg" alt="pokemon" width="70px" />
            </Link>
            <div className="flex items-center gap-5 ">
                <div className="relative">
                    <FaHeart size={40} color={"#F7C500"}/>
                    <div className="w-4 h-5 bg-red-600 rounded-full flex items-center justify-center absolute right-0 bottom-1">0</div>

                </div>
                <Link href={'/contact'} className="px-5 py-2 text-black border-none rounded-4xl mt-1">contact </Link>
            </div>

        </div>
    );

}

export default Navbar;