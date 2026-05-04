"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/logo.jpg";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleUserSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    toast.success("Signout Successfully");
  };

  const activeClass =
  "border-b-2 border-amber-950 text-amber-950 font-semibold px-2 py-1 transition rounded-2xl";

  return (
    <div className="border-b px-2">
      <nav className="flex flex-wrap md:flex-nowrap justify-between items-center py-3 max-w-7xl mx-auto w-full">

        <Link href={"/"} className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h3 className="font-black text-xl md:text-2xl">Tiles Gallery</h3>
        </Link>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <ul className={`w-full md:w-auto md:flex gap-5 text-lg items-center ${open ? "flex flex-col mt-3" : "hidden md:flex"}`}>

          <li>
            <Link
              className={pathname === "/" ? activeClass : ""}
              href={"/"}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={pathname === "/AllTiles" ? activeClass : ""}
              href={"/AllTiles"}
            >
              All Tiles
            </Link>
          </li>

          <li>
            <Link
              className={pathname === "/profile" ? activeClass : ""}
              href={"/profile"}
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className={`w-full md:w-auto mt-3 md:mt-0 flex items-center gap-4 ${open ? "flex gap-10 justify-around " : "hidden md:flex"}`}>

          {user ? (
            <div className="flex items-center gap-4">
              <p className="font-bold text-amber-950">{user?.name}</p>

              <Avatar>
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button className="font-bold" onClick={handleUserSignOut} variant="danger">
                SignOut
              </Button>
            </div>
          ) : (
            <div className="flex  gap-3">
              <Link href={"/signUp"}>
                <Button className="bg-amber-950 text-white">SignUp</Button>
              </Link>

              <Link href={"/signIn"}>
                <Button className="bg-amber-950 text-white">SignIn</Button>
              </Link>
            </div>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;