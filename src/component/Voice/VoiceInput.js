import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone"
export const VoiceInput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    return(
        <div className="border border-none flex-col flex items-center justify-center h-full w-[10%]">
        <FontAwesomeIcon icon={faMicrophone}  className="text-gray-600 text-4xl"></FontAwesomeIcon>
        </div>
    )
}