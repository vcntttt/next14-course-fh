"use client"
import Image from "next/image";
import { useAuthStore } from "@/store/user";

export default function DoctorProfile() {
  const { user } = useAuthStore();
  
  return (
    <div id="profile" className="py-4">
    <Image
      src="/person.png"
      alt="Avatar user"
      width={50}
      height={100}
      className="w-10 md:w-16 rounded-full mx-auto"
    />
    <div>
      <h2 className="font-medium text-xs md:text-sm text-center text-red-600">
        {user.name}
      </h2>
      <p className="text-xs text-gray-500 text-center">{user.role}</p>
    </div>
  </div>
  )
}
