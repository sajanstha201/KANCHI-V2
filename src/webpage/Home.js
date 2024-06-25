import { GPTMain } from "../component/GPTSection"
import { HistoryMain } from "../component/History"
export const Home=()=>{
    return(
        <div className="flex flex-row h-[100%]">
            <HistoryMain/>
            <GPTMain/>
        </div>
    )
}