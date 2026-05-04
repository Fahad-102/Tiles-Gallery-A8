"use client"
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div  style={{ backgroundImage: "url('/TilesImages/tiles12.png')" }} className=" h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center shadow-xl overflow-hidden mt-10">
      
      <div className="w-full h-full bg-linear-to-r from-black/80 via-black/50 to-transparent flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
          
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 max-w-3xl leading-tight drop-shadow-2xl">
            Elevate Your Space with <span className="text-amber-500">Premium Tiles</span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-8 max-w-xl text-gray-200 leading-relaxed drop-shadow-md">
            Explore our exclusive collection of luxury ceramics and marbles to transform your dream home.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/AllTiles">
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 shadow-lg"
              >
                Browse Now
              </Button>
            </Link>

            <Link href="/signIn">
              <Button 
                size="lg"
                variant="bordered" 
                className="text-white border-white hover:bg-white hover:text-black font-semibold px-8 backdrop-blur-sm shadow-sm"
              >
                Join Us
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
