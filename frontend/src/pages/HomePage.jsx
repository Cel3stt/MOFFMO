import React from 'react'
import { useChatStore } from '../store/useChatStore'
import Sidebar from '../components/Sidebar'
import NoChatSelected from '../components/NoChatSelected'
import ChatContainer from '../components/ChatContainer'
import bglight from '../assets/bglight.png'

const HomePage = () => {

  const {selectedUser} = useChatStore()
  return (
    <div className="h-screen " style={{ backgroundImage: `url(${bglight})` , backgroundSize: 'cover', backgroundPosition: 'center'}}>
         <div className="flex justify-center pt-20 px-2 md:px-6 lg:px-12">
  <div className="bg-base-100 rounded-lg shadow-lg w-full max-w-[1400px] h-[85vh]">
          <div className="flex h-full rounded-md overflow-hidden">

            <Sidebar/>

            {!selectedUser ? <NoChatSelected/> : <ChatContainer/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
