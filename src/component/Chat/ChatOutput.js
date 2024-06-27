import { useSelector } from "react-redux"
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"


export const ChatOutput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    console.log(baseUrl)
    console.log(isChatActivate)
    return(
        <>
        <div className={`w-full h-full`} >
        </div>
        </>
    )
}