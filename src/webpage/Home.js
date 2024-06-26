import { GPTMain } from "../component/GPTSection"
import { SideNavbar } from "../component/SideNavbar"
export const Home=()=>{
    return(
        <div className="flex flex-row h-[100%] w-full ">
            <SideNavbar/>
            <div className="flex flex-col w-[100%] h-[100%]">
            <GPTMain />
            </div>
            
            
        </div>
    )
}