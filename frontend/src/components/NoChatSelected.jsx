import { MessageSquare } from 'lucide-react'
import React from 'react'
import welcomeImg from '../assets/welcomeImg.png'

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
        <div className="max-w-xl text-center space-y-6">

            <div className="flex justify-center gap-4 mb-6">
                <div className="relative">
                    <div className="w-full rounded-2xl bg-primary/10 flex items-center justify-center ">
                    <img src={welcomeImg} alt="" />
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold animate-bounce">Welcome to Moffmo!</h2>
            <p className='text-lg content/60'>Pick a conversation to start messaging</p>
        </div>
    </div>
  )
}

export default NoChatSelected
