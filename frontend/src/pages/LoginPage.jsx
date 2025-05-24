import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import AuthImagePattern from '../components/AuthImagePattern'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from 'lucide-react'

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)
  
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
  
    const {login, isLoggedIn} = useAuthStore()

    
  const handleSubmit = async (e) => {
    e.preventDefault()
    login(formData)
  }


  return (
    <div className='min-h-screen grid lg:grid-cols-2 overflow-hidden'>

     {/* ======================= LEFT SIDE======================= */}
     <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
      <div className="w-full max-w-md space-y-8">

             {/* ========= LOGO =========== */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-2 group">
            <div className='size-12 rounded-xl bg-primary/10 flex items-center 
            justify-center group-hover:bg-primary/20 transition-colors'>
              <MessageSquare className='size-6 text-primary'/>
            </div>
            <h1 className='text-2xl font-bold mt-2'>Welcome Back</h1>
            <p className='text-base-content/60'>Sign in to your account</p>
          </div>
        </div>

          {/* ========= FORM =========== */}

          <form onSubmit={handleSubmit} className='space-y-6'>
           


            <div className="form-control">
              <label className="label">
                <span className='label-text font-medium'>Email</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className='size-5'/>
                </div>

                <input 
                type='email'
                className={`input input-bordered w-full pl-10`}
                placeholder='you@gmail.com'
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                >

                </input>
              </div>
            </div>


             <div className="form-control">
              <label className="label">
                <span className='label-text font-medium'>Password</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className='size-5 '/>
                </div>

                <input 
                type={showPassword ? 'text' : 'password'}
                className={`input input-bordered w-full pl-10`}
                placeholder='•••••••••'
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                >

                </input>

                <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className='size-5'/> 
                  ): (<Eye className='size-5'/>)
                  }

                </button>
              </div>
            </div>


            <button type='submit' className='btn btn-primary w-full' disabled={isLoggedIn}>
              {isLoggedIn ? (
                <Loader2 className='size-5 animate-spin'/>
              ) : (
                "Login"
              )}

            </button>
          </form>

          <div className='text-center'>
            <p className='text-base-content/60'>
              Don&apos;t have an account? {""}
              <Link to='/signup' className='link link-primary'>
              Create Account
              </Link>
            </p>
          </div>
      </div>
     </div>




      {/* ======================= RIGHT SIDE======================= */}

   <div className='bg-base-200/40 hidden lg:flex justify-center items-center relative'>
       <AuthImagePattern   />
   </div>

    </div>
  )
}

export default LoginPage
