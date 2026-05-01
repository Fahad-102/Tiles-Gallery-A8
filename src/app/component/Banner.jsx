"use client"
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center shadow-xl overflow-hidden">
      
      <div className="w-full h-full bg-linear-to-r from-black/80 via-black/50 to-transparent flex items-center">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-white">
          
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 max-w-3xl leading-tight drop-shadow-2xl">
            Elevate Your Space with <span className="text-amber-500">Premium Tiles</span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-8 max-w-xl text-gray-200 leading-relaxed drop-shadow-md">
            Explore our exclusive collection of luxury ceramics and marbles to transform your dream home.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/all-photos">
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 shadow-lg"
              >
                Explore Gallery
              </Button>
            </Link>

            <Link href="/pricing">
              <Button 
                size="lg"
                variant="bordered" 
                className="text-white border-white hover:bg-white hover:text-black font-semibold px-8 backdrop-blur-sm shadow-sm"
              >
                View Catalog
              </Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
