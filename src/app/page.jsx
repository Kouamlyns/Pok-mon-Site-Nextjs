
"use client"

import Card from "@/components/CardComponent/Card";
import Footer from "@/components/FooterComponent/Footer";
//import Navbar from "@/components/NavBarComponent/Navbar";
import Link from "next/link";
import{useState} from "react";
import{FaRegHeart, FaHeart} from "react-icons/fa";

export default function Home() {
  
  return (
    <>
      <div className=" h-fit flex items-center justify-center gap-2 shadow-md mb-7
                        bg-gradient-to-br from-yellow-200 via-amber-600 to-amber-100
      ">
          <Card/>
      </div>
      
    </>
  );
}
