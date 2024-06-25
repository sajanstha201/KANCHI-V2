import { ChatOutput } from "../Chat/ChatOutput";
import { VoiceOutput } from "../Voice/VoiceOutput";
export const Output=()=>{
    return(
        <>
        <div className="flex flex-row justify-between h-full w-full">
            <ChatOutput></ChatOutput>
            <VoiceOutput></VoiceOutput>
        </div>
        </>
    )
}