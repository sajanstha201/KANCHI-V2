import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider";
import { ChatInput } from "../Chat/ChatInput";
import { VoiceInput } from "../Voice/VoiceInput";
export const Input=()=>{

    return(
        <div className="h-full flex flex-row w-full ">
            <ChatInput/>
            <VoiceInput/>
        </div>
    )
}