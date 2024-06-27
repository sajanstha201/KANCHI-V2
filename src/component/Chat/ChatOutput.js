import { useSelector } from "react-redux"
import { useChatIO, useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"

export const ChatOutput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const {chatIO,setChatIO}=useChatIO()
    console.log(baseUrl)
    console.log(isChatActivate)
    return(
        <>
        <h1>This is ChatOuput</h1>
        {chatIO.question}
        {chatIO.answer}
        </>
    )
}