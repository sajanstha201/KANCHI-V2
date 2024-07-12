import { ChatOutput } from "../Chat/ChatOutput";
import { VoiceOutput } from "../Voice/VoiceOutput";
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider";
import chatbg from '../../static/images/bg.png'
export const Output=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <>
        <div className="flex flex-col justify-between h-full w-full rounded-md" >
            <div className="h-full rounded-md overflow-auto">
            <ChatOutput></ChatOutput>
            </div>
        </div>
        </>
    )
}