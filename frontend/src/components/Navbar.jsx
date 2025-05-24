"use client"

import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore"
import { Link } from "react-router-dom"
import { LogOut, Settings, Star, User, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const { logout, authUser } = useAuthStore()

  return (
    <>
      <header className="bg-base-100 border-b border-primary/20 fixed w-full top-0 z-40 backdrop-blur-lg">
        <div className="mx-auto container px-4 xl:px-16 h-16">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <h1 className="text-2xl font-bold text-primary">Moffmo</h1>
            </Link>

            {/* Desktop nav (right side) */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/settings"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-content hover:bg-white/90 text-primary transition-all duration-200 border border-primary/20"
              >
                <Settings className="size-4" />
                <span className="text-sm font-medium">Settings</span>
              </Link>

              {authUser && (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-content hover:bg-white/90 text-primary transition-all duration-200 border border-primary/20"
                  >
                    <User className="size-4" />
                    <span className="text-sm font-medium">Profile</span>
                  </Link>

                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-content transition-all duration-200"
                    onClick={logout}
                  >
                    <LogOut className="size-4" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </>
              )}
            </div>

            {/* Mobile Hamburger - only shows on small screens */}
            <button
              className="md:hidden p-2 rounded-full bg-base-200/70 hover:bg-base-200/90 text-primary transition-all duration-200 "
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Only visible when isOpen is true */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-base-100 ">
          {/* Close Button - Top Right */}
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-base/90 hover:bg-primary/20 not-only:transition-all duration-200 "
            onClick={() => setOpen(false)}
          >
            <X className="size-6" />
          </button>

          {/* Mobile Nav Content - Properly centered */}
          <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-16">
            <div className="flex bg-primary-content p-10 flex-col items-center gap-6 w-full max-w-xs">
              <Link
                to="/settings"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl  bg-secondary text-base-100  transition-all duration-200 border border-primary/20 "
                onClick={() => setOpen(false)}
              >
                <Settings className="size-5" />
                <span className="font-medium">Settings</span>
              </Link>

              {authUser && (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-secondary text-base-100  transition-all duration-200  border border-primary/20 "
                    onClick={() => setOpen(false)}
                  >
                    <User className="size-5" />
                    <span className="font-medium">Profile</span>
                  </Link>

                  <button
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-secondary text-base-100  hover:opacity-50   transition-all duration-200   border border-primary/20"
                    onClick={() => {
                      logout()
                      setOpen(false)
                    }}
                  >
                    <LogOut className="size-5" />
                    <span className="font-medium">Logout</span>
                  </button>
                </>
              )}
            </div>

           
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
