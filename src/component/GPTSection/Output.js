import { ChatOutput } from "../Chat/ChatOutput";
import { VoiceOutput } from "../Voice/VoiceOutput";
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider";
export const Output=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <>
        <div className="flex flex-col justify-between h-full w-full">
            <div className="h-[80%] border border-black">
            <ChatOutput></ChatOutput>
            </div>
            <div className="border h-[20%] border-black">
            <VoiceOutput></VoiceOutput>
            </div>
            
        </div>
        </>
    )
}