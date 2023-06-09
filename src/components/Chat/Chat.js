import React from 'react'
import './Chat.css'
import { TbBrandMessenger } from "react-icons/tb";

const Chat = () => {
    return (
        <div className='chat-div'>
        <div className='chat-icon-div'>

            <TbBrandMessenger className='chat-icon' />
        </div>
        </div>
    )
}

export default Chat