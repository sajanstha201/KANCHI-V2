import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const ChatInput=()=>{
    const [userQuestion,setUserQuestion]=useState('')
    return(
        <div className=" w-[90%] h-full relative flex items-center justify-center" id="chat-input">
        <input type="text" id='user-question' className="w-full ml-[5%] border border-none h-[40%] rounded-lg bg-gray-300 p-2" placeholder="Type here......"/>
        <FontAwesomeIcon 
            icon={faPaperPlane} 
            className="text-3xl absoute right-4 top-1 transform -translate-x-12 text-gray-600 cursor-pointer" 
            onClick={()=>{
                setUserQuestion(document.getElementById('user-question').value)
                document.getElementById('user-question').value=''
            }}>

            </FontAwesomeIcon>
        </div>
    )
}