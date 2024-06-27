import {  createContext, useState,useContext } from "react"
const chatVoiceStatusContext=createContext()
const chatIOContext=createContext()
const voiceIOContext=createContext()
export const ChatVoiceStatusProvider=({children})=>{
    const [isChatActivate,setIsChatActivate]=useState(true)
    const [chatIO,setChatIO]=useState({question:'what is you name',answer:'my name is Nepal GPT made by RAN.'})
    const [voiceIO,setVoiceIO]=useState({})
    return(

        <chatVoiceStatusContext.Provider value={{isChatActivate,setIsChatActivate}}>
            <chatIOContext.Provider value={{chatIO,setChatIO}}>
                <voiceIOContext.Provider value={{voiceIO,setVoiceIO}}>
                {children}
                </voiceIOContext.Provider>
            </chatIOContext.Provider>
        </chatVoiceStatusContext.Provider>
    )
}
export const useChatVoiceStatus=()=>useContext(chatVoiceStatusContext)
export const useChatIO=()=>useContext(chatIOContext)
export const useVoiceIO=()=>useContext(voiceIOContext)