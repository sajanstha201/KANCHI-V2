import { useSelector } from "react-redux"
import { useChatQA, useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
import { VoiceOutput } from "../Voice/VoiceOutput"
export const ChatOutput=()=>{
    const {isChatActivate,setIsChatActivate}=useChatVoiceStatus()
    const baseUrl=useSelector((state)=>state.baseUrl).backend
    const {chatQA,setChatQA}=useChatQA()
    console.log(baseUrl)
    console.log(isChatActivate)
    return(
        <>
        
 <div className="w-full flex flex-col gap-5 p-2 flex-wrap overflow-y-scroll">
      <div className="w-full  flex justify-end pl- pr-2">
            
        <div className="px-4 py-1 rounded-2xl bg-[#6138B9] w-fit text-white">

        {chatQA.question}
        
        </div>
      </div>

      <div className=" flex flex-row w-full">
        <div className=" rounded-2xl bg-white font-semibold">
        {chatQA.answer}
        
        </div>
        <div className=" flex items-end p-3">
          <VoiceOutput />
      </div>
      </div>
 
      
 </div>
        </>
    )
}