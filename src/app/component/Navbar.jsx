"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/logo.jpg";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user
  const handleUserSignOut = async()=>{
    await authClient.signOut();
  }
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
       
       <Link href={"/"}>
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
            </Link> 

        <ul className="flex justify-center items-center gap-5 text-lg">
          <li>
            <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/AllTiles"}>All Tiles</Link>
          </li>
          { user &&
          <li>
            <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/profile"}> My Profile</Link>
          </li>
}
        </ul>

        <div className="flex gap-4 items-center">
          {user && 
          
          <div className="flex items-center gap-4">

              <p className="max-w-xl">{user?.name}</p>
             <Avatar>
        <Avatar.Image
         alt="John Doe"
          src={user?.image}
          referrerPolicy= "no-referrer"
          />
          
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>

      <Button onClick={handleUserSignOut} variant="danger">SignOut</Button>
          </div>
          
          } 

          

    
         {!user && 
          <ul className="flex items-center text-lg gap-5">
            <li>
              <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/signUp"}>
  <Button className="bg-amber-900 text-white">
  SignUp
  </Button>

  </Link>
            </li>
            <li>
              <Link className=" hover:text-amber-900 text-black 
 transition-colors" href={"/signIn"}><Button className="bg-amber-900 text-white">
  SignIn
  </Button></Link>
            </li>
          </ul>
          }
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;

