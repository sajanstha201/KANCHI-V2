import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
export const VoiceInput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <div className="border border-black flex-col flex items-center justify-center h-full w-[10%]">
        <h1>VoiceInput</h1>
        <div className="flex items-center justify-center bg-black w-[20px] h-[20px]" >

        </div>
        </div>
    )
}