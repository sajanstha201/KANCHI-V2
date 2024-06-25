import { ChatInput } from "../Chat/ChatInput";
import { VoiceInput } from "../Voice/VoiceInput";
export const Input=()=>{
    return(
        <>
            <div className="h-full flex flex-row justify-between w-full ">
                <ChatInput></ChatInput>
                <VoiceInput></VoiceInput>
            </div>
        </>
    )
}