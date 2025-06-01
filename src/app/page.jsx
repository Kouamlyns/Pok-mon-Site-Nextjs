
"use client"

import Footer from "@/components/FooterComponent/Footer";
//import Navbar from "@/components/NavBarComponent/Navbar";
import Link from "next/link";
import{useState} from "react";
import{FaRegHeart, FaHeart} from "react-icons/fa";

export default function Home() {
  const [counter, setCounter] = useState (0)
  const [textEnterred, setTextEnterred] = useState("")
  const [isClick, setIsClick] = useState(false);
  let username ="lelynx"
  const increment = () =>{
    setCounter(counter + 1)
  }
  const decrement = () =>{
    setCounter(counter == 0? counter: counter - 1)
  }
  return (
    <>
  
      
      <div className="bg-amber-700 h-screen flex items-center justify-center flex-col">
          <img src="/nextjs.jpeg" alt="logo" width={300} />
      <div>
        {
        isClick ? <FaHeart width ={20} className="cursor-pointer" color="red" onClick={()=>{setIsClick(false)}}/> : <FaRegHeart className="cursor-pointer" width ={10} color="#fff" onClick={()=>{setIsClick(true)}}/>
      }
        
      </div>   
          <form>

            <input value={textEnterred} className="bg-white px-3 py-2 text-black" onChange={(e)=> setTextEnterred(e.target.value)} type="text" placeholder="enter your massage"  />

          </form>

        <h1 className="text-4xl text-white font-bold">text Entered: {textEnterred} </h1>
        <h1 className="text-9xl text-white font-bold">{counter}</h1>
      
        <div className="flex gap-5 mb-10">
          <button onClick={()=>increment()} className="bg-green-800 text-white cursor-pointer px-5 py-2 rounded-4xl"> increment</button>
          <button onClick={()=>decrement()} className="bg-red-600 text-white cursor-pointer px-5 py-2 rounded-4xl"> decrement</button>
        </div>
          <button onClick={()=>setCounter(0)} className="bg-black text-white cursor-pointer px-5 py-2 rounded-4xl"> reset</button>
        
          <Link href={'/contact'} className="bg-amber-400 px-5 py-2 border-none rounded-4xl mt-1">contact </Link>
      </div>
      <Footer/>
    </>
  );
}
