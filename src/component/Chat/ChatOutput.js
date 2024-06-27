import { useSelector } from "react-redux"
import { useChatIO, useChatVoiceStatus } from "../../context/ChatVoiceStatusProvider"
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

      <div className="pr-32">
 
        <div className="px-4 py-1  rounded-2xl bg-white w-fit w-max-5/6 font-semibold">
        {chatIO.answer}

         </div>
      </div>
 </div>
        </>
    )
}