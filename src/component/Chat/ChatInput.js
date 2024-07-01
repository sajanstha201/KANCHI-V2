import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const ChatInput=()=>{
    const [userQuestion,setUserQuestion]=useState('')
    return(
        <div className=" w-[90%] relative mt-6" id="chat-input">
        <input type="text" id='user-question' className="w-[90%] border border-none rounded-lg p-5 my-4 bg-gray-300 mt-10" placeholder="Type here......"/>
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