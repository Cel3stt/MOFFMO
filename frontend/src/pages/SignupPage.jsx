import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Cloud, Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User2Icon,} from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthImagePattern from '../components/AuthImagePattern'
import toast from 'react-hot-toast'
import bg2 from '../assets/bg2.png'

const SignupPage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  })

  const {signup, isSigningUp} = useAuthStore()

  const validateForm = () => {
    if(!formData.fullname || !formData.email || !formData.password)
      return toast.error("All fields are required")
    
    if(!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Please enter a valid email")
    

    if(formData.password.length < 6)
      return toast.error("Password must be at least 6 characters")
    

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const success = validateForm()

    if(success === true) signup(formData)
  }
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>

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
            <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
            <p className='text-base-content/60'>Get started with your free account</p>
          </div>
        </div>

          {/* ========= FORM =========== */}

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="form-control">
              <label className="label">
                <span className='label-text font-medium'>Fullname</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User2Icon className='size-5 '/>
                </div>

                <input 
                type='text'
                className={`input input-bordered w-full pl-10`}
                placeholder='Momo Doe'
                value={formData.fullname}
                onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                >

                </input>
              </div>
            </div>


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


            <button type='submit' className='btn btn-primary w-full' disabled={isSigningUp}>
              {isSigningUp ? (
                <Loader2 className='size-5 animate-spin'/>
              ) : (
                "Create Account"
              )}

            </button>
          </form>

          <div className='text-center'>
            <p className='text-base-content/60'>
              Already have an account? {""}
              <Link to='/login' className='link link-primary'>
              Sign in
              </Link>
            </p>
          </div>
      </div>
     </div>




      {/* ======================= RIGHT SIDE======================= */}
      <div className="hidden lg:flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-base-200/30 to-base-300/20">
        <div className="absolute inset-0 pointer-events-none">
          {/* Large fluffy clouds */}
          <div className="absolute top-16 left-8 w-32 h-20 bg-base-content/5 rounded-full animate-cloud-drift-1"></div>
          <div className="absolute top-32 right-12 w-40 h-24 bg-base-content/4 rounded-full animate-cloud-drift-2"></div>
          <div className="absolute top-48 left-16 w-28 h-18 bg-base-content/6 rounded-full animate-cloud-drift-3"></div>

          {/* Medium clouds */}
          <div className="absolute top-64 right-20 w-24 h-15 bg-base-content/5 rounded-full animate-cloud-drift-4"></div>
          <div className="absolute top-80 left-12 w-20 h-12 bg-base-content/4 rounded-full animate-cloud-drift-5"></div>

          {/* Small accent clouds */}
          <div className="absolute top-96 right-8 w-16 h-10 bg-base-content/6 rounded-full animate-cloud-drift-6"></div>
          <div className="absolute top-20 left-1/3 w-18 h-11 bg-base-content/3 rounded-full animate-cloud-drift-7"></div>

          {/* Tiny floating clouds */}
          <div className="absolute top-40 right-1/3 w-12 h-8 bg-base-content/5 rounded-full animate-cloud-drift-8"></div>
          <div className="absolute top-72 left-1/4 w-14 h-9 bg-base-content/4 rounded-full animate-cloud-drift-9"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
          {/* Large decorative cloud */}
          <div className="relative">
            <Cloud className="w-32 h-32 text-primary/20 drop-shadow-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Cloud className="w-24 h-24 text-primary/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Cloud className="w-16 h-16 text-primary/40" />
            </div>
          </div>

          {/* Welcome message */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-base-content/80">Welcome to Moffmo</h2>
            <p className="text-base-content/60 max-w-xs">
              Connect with friends and share your moments in our cozy cloud
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex gap-4 mt-8">
            <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary/40 rounded-full animate-pulse delay-300"></div>
            <div className="w-3 h-3 bg-accent/30 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="absolute">
        
          <img src={bg2} alt="" />
        </div>
      </div>

    </div>
  )
}

export default SignupPage
