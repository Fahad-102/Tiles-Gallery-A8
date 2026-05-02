"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/logo.jpg";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="The Tiles Gallery logo"
            loading="eager"
            width={50}
            height={50}
            style={{ width: 'auto', height: 'auto' }}
            className="object-cover h-auto w-auto border"
          />
          <h3 className="font-black text-2xl">Tiles Gallery</h3>
        </div>

        <ul className="flex justify-center items-center gap-5 text-lg">
          <li>
            <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/AllTiles"}>All Tiles</Link>
          </li>
          
          <li>
            <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/profile"}> My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center text-lg gap-5">
            <li>
              <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/signUp"}>SignUp</Link>
            </li>
            <li>
              <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/signIn"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

