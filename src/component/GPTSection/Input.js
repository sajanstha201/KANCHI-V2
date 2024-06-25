import { ChatInput } from "../Chat/ChatInput";
import { VoiceInput } from "../Voice/VoiceInput";
export const Input=()=>{
    return(
        <>
            <div className="h-full flex flex-row justify-between w-full ">
                <div className="h-full w-full flex ">
                <ChatInput></ChatInput>
                </div>
                <div>
                <VoiceInput></VoiceInput>
                </div>
                
                
            </div>
        </>
    )
}