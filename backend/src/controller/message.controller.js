import Message from "../model/message.model.js";
import User from "../model/user.model.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        const loggedInUserId = req.user._id
        const filteredUsers = await User.find({_id: {$ne:loggedInUserId}}).select("-password ")

        res.status(200).json(filteredUsers)
    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message)
        res.status(500).json({message:"Internal server error"})
}
}

export const getMessages = async (req,res) => {
    try {
        const {id:userToChatId} = req.params
        const myId = req.user._id

        const message = await Message.find({
            $or: [
                {senderid:myId, receiverId:userToChatId},
                {senderId:userToChatId, receiverId:myId}
            ]
        })

        res.status(200).json(messages)
    } catch (error) {
        console.log("Error in getMessages:", error.message)
        res.status(500).json({message:"Internal server error"})
    }
}