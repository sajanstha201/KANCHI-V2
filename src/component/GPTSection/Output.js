import { ChatOutput } from "../Chat/ChatOutput";
import { VoiceOutput } from "../Voice/VoiceOutput";
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider";
export const Output=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <>
        <div className="flex flex-col justify-between h-full w-full">
        <div className="border h-[10%] border-black">
            <VoiceOutput></VoiceOutput>
            </div>
            <div className="h-[9a0%] border border-black">
            <ChatOutput></ChatOutput>
            </div>
        </div>
        </>
    )
}