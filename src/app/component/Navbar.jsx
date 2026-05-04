"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/logo.jpg";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { useState } from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);

  const handleUserSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2">
      <nav className="flex flex-wrap md:flex-nowrap justify-between items-center py-3 max-w-7xl mx-auto w-full">

        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={logo}
            alt="The Tiles Gallery logo"
            width={50}
            height={50}
            className="object-cover border"
          />
          <h3 className="font-black text-xl md:text-2xl">Tiles Gallery</h3>
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul
          className={`w-full md:w-auto md:flex gap-5 text-lg items-center transition-all ${
            open ? "flex flex-col mt-3" : "hidden md:flex"
          }`}
        >
          <li>
            <Link className="hover:text-amber-900 transition-colors" href={"/"}>
              Home
            </Link>
          </li>

          <li>
            <Link className="hover:text-amber-900 transition-colors" href={"/AllTiles"}>
              All Tiles
            </Link>
          </li>

          <li>
            <Link className="hover:text-amber-900 transition-colors" href={"/profile"}>
              My Profile
            </Link>
          </li>
        </ul>

        <div className={`w-full md:w-auto mt-3 md:mt-0 flex items-center gap-4 ${open ? "flex" : "hidden md:flex"}`}>

          {user ? (
            <div className="flex items-center gap-4">
              <p className="text-sm md:text-base">{user?.name}</p>

              <Avatar>
                <Avatar.Image
                  alt="user"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>

              <Button onClick={handleUserSignOut} variant="danger">
                SignOut
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href={"/signUp"}>
                <Button className="bg-amber-900 text-white">SignUp</Button>
              </Link>

              <Link href={"/signIn"}>
                <Button className="bg-amber-900 text-white">SignIn</Button>
              </Link>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;