import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { useChatStore } from '../store/useChatStore'
import avatar from '../assets/avatar.jpg'
import { X } from 'lucide-react'


const ChatHeader = () => {
    const {selectedUser, setSelectedUser} = useChatStore()
    const {onlineUsers} = useAuthStore()


  return (
    <div className='p-3 border-b border-base-300'>
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 ">

                <div className="avatar">
                    <div className="size-10 rounded-full relative">
                        <img src={selectedUser.profilePic || avatar }alt={selectedUser.fullname}/>
                    </div>
                </div>

                {/*====USER INFO=====*/}

                <div>
                    <h3 className="font-medium">{selectedUser.fullname}</h3>
                    <p className='text-sm text-base-content/70'>
                    {onlineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}
                    </p>
                    
                </div>


            </div>
            
                <button className='' onClick={() => setSelectedUser(null)}>
                    <X/>
                </button>


        </div>
    </div>
  )
}

export default ChatHeader
