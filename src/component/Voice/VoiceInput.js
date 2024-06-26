import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone"
export const VoiceInput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <div className="border border-black flex-col flex items-center justify-center h-full w-[10%]">
        <h1>VoiceInput</h1>
        <FontAwesomeIcon icon={faMicrophone} size='2x'></FontAwesomeIcon>
        <div className="flex items-center justify-center bg-black w-[20px] h-[20px]" >

        </div>
        </div>
    )
}