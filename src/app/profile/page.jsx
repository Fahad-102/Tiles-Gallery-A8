"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { EditProfile } from "../component/EditProfile";

const Profilepage = () => {
  const userId = authClient.useSession();
  const user = userId.data?.user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 ">
      
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-xl border">
        
        <div className="flex flex-col items-center">
          <Avatar className="h-32 w-32 ring-4 ring-white shadow-lg">
            <Avatar.Image
              alt="User Profile"
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>

          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            {user?.name || "No Name"}
          </h2>

          <p className="text-sm text-gray-500">
            {user?.email || "No Email"}
          </p>
        </div>

        <div className="my-5 border-t" />
        
        <div className="flex flex-col gap-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span className="font-medium">Status</span>
            <span className="text-green-500">Active</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">Role</span>
            <span>User</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <EditProfile />
        </div>
      </Card>
    </div>
  );
};

export default Profilepage;