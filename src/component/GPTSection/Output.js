import { ChatOutput } from "../Chat/ChatOutput";
import { VoiceOutput } from "../Voice/VoiceOutput";
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider";
import chatbg from '../../static/images/bg.png'
export const Output=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <>
        <div className="flex flex-col justify-between h-full w-full rounded-md" style={{ backgroundImage: `url(${chatbg})`,
          width: '100%',
        height: '100%',        
        backgroundSize: 'cover',
        backgroundPosition: 'center' }}>
<<<<<<< HEAD
            <div className="h-[80%] border border-black rounded-md overflow-scroll">
            <ChatOutput></ChatOutput>
            </div>
            <div className="border h-[20%] border-black rounded-md">
            <VoiceOutput></VoiceOutput>
            </div>
            <div className="h-[9a0%] border border-black">
=======
            <div className="h-full rounded-md overflow-auto">
>>>>>>> origin/main
            <ChatOutput></ChatOutput>
            </div>
        </div>
        </>
    )
}