"use client"

import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import avatar from "../assets/avatar.jpg"
import { Camera, Cloud, Mail, User } from "lucide-react"
import profileContainer from "../assets/profileContainer.png"

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore()
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = async () => {
      const base64Image = reader.result
      setSelectedImage(base64Image)
      await updateProfile({ profilePic: base64Image })
    }
  }

  return (
    <div className="h-screen pt-20">
      <div className="max-w-5xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-2">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <p className="mt-1">Your profile information</p>
        </div>

     <div className="grid lg:grid-cols-2 xl:grid-cols-2 items-center justify-center mt-6">
         {/* ================AVATAR UPLOAD================= */}
        <div className="flex-1 max-w-md">
          <div className="flex flex-col items-center gap-4 my-8">
          <div className="relative">
            {/* Heart container with exact positioning */}
            <div className="relative w-80 h-80">
              <img
                src={profileContainer || "/placeholder.svg"}
                alt="Profile Container"
                className="w-full h-full object-contain"
              />

              {/* Profile image positioned exactly in the scalloped center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative" style={{ marginTop: "8px", marginLeft: "2px" }}>
                  {/* Profile image with exact dimensions to fit the scalloped frame */}
                  <div className="size-65 -mt-2 overflow-hidden relative">
                    <img
                      src={selectedImage || authUser?.profilePic || avatar}
                      alt="Profile Image"
                      className="w-full h-full object-cover rounded-4xl border-3 border-[#94ad89]  bg-white"
                     
                    />
                  </div>

                  {/* Camera upload button positioned perfectly */}
                  <label
                    htmlFor="avatar-upload"
                    className={`absolute -bottom-2 -right-2 bg-primary hover:bg-primary/40 hover:scale-105 p-2 rounded-full
                      cursor-pointer transition-all duration-200 shadow-lg border-2 border-white
                      ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                    `}
                  >
                    <Camera className="size-4 text-white" />
                    <input
                      type="file"
                      id="avatar-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUpdatingProfile}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-primary text-center max-w-md">
            {isUpdatingProfile ? <div className="absolute inset-0 bg-base/70 backdrop-blur-sm z-10 flex items-center justify-center rounded-2xl">
      <Cloud className="w-16 h-16 text-primary animate-bounce" />
    </div> : <div className="bg-primary-content p-4 rounded-xl text-center text-primary">
      Click the camera icon to upload a new profile picture</div>}
          </p>
        </div>
        </div>

        {/* ================PROFILE INFO================= */}
        <div className="flex-1 max-w-md space-y-6">
           <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm text-zinc-400 flex items-center gap-2">
              <User className="size-4" />
              Fullname
            </div>
            <p className="px-4 py-2 bg-primary-content rounded-lg border-2 border-secondary">{authUser?.fullname}</p>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-zinc-400 flex items-center gap-2">
              <Mail className="size-4" />
              Email
            </div>
            <p className="px-4 py-2 bg-primary-content rounded-lg border-2 border-secondary">{authUser?.email}</p>
          </div>

          
        </div>
 <div className="mt-6 bg-base-300/40 rounded-xl p-6">
          <h2 className="text-lg font-medium mb-4">Account Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b">
              <span>Member Since</span>
              <span className="">{authUser.createdAt?.split("T")[0]}</span>
            </div>

            <div className="flex items-center justify-between py-2">
              <span>Account Status</span>
              <span className="text-green-500 bg-base-100 p-2 rounded-sm">Active</span>
            </div>
          </div>
        </div>
        </div>
     </div>
       
      </div>
    </div>
  )
}

export default ProfilePage
