import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
export const VoiceInput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <div className=" p-3 ">
        <h1>This is VoiceInput</h1>
        <div className="flex items-center justify-center bg-black w-[100px] h-[100px]" >

        </div>
        </div>
    )
}