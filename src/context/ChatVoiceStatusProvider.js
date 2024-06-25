import {  createContext, useState,useContext } from "react"
const chatVoiceStatusContext=createContext()
export const ChatVoiceStatusProvider=({children})=>{
    const [isChatActivate,setIsChatActivate]=useState(true)
    return(
        <chatVoiceStatusContext.Provider value={{isChatActivate,setIsChatActivate}}>
            {children}
        </chatVoiceStatusContext.Provider>
    )
}
export const useChatVoiceStatus=()=>useContext(chatVoiceStatusContext)