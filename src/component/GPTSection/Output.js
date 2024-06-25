import { ChatOutput } from "../Chat/ChatOutput";
import { VoiceOutput } from "../Voice/VoiceOutput";
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider";
export const Output=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <>
        <div className="flex flex-row justify-between h-full w-full">
            {isChatActivate&&<ChatOutput></ChatOutput>}
            {!isChatActivate&&<VoiceOutput></VoiceOutput>}
        </div>
        </>
    )
}