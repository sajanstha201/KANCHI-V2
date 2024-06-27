import { useSelector } from "react-redux"
import { useChatIO, useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
import { VoiceOutput } from "../Voice/VoiceOutput"
export const ChatOutput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const {chatIO,setChatIO}=useChatIO()
    console.log(baseUrl)
    console.log(isChatActivate)
    return(
        <>
        
 <div className="w-full flex flex-col gap-5 p-5 flex-wrap">
      <div className="w-full  flex justify-end pl-28 pr-2">
            
        <div className="px-4 py-1 rounded-2xl bg-[#6138B9] w-fit text-white">

        {chatIO.question}
        
        </div>
      </div>

      <div className=" flex flex-row ">
        <div className="px-4 py-1 w-[70%]  rounded-2xl bg-white  w-max-5/6 font-semibold">
        {chatIO.answer}
        
        </div>
        <div className="w-[20%] flex items-end p-3">
          <VoiceOutput />
      </div>
      </div>
 
      
 </div>
        </>
    )
}