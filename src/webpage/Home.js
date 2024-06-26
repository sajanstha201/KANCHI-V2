import { GPTMain } from "../component/GPTSection"
import { HistoryMain } from "../component/History"
export const Home=()=>{
    return(
        <div className="flex flex-row h-[100%] w-full ">
            <HistoryMain />
            <div className="flex flex-col w-[100%] h-[100%] flex-grow-1">

            <GPTMain />
            </div>
            
            
        </div>
    )
}