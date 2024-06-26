import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { HistoryMain } from "./History"
import { useSideNavbar } from "../../context/SideNavbarProvider"
import { NewUser } from "./NewUser"
export const SideNavbar=()=>{
    const {isSideNavbarHidden,setIsSideNavbarHidden}=useSideNavbar()
    return(
        <div className={`w-[300px] bg-gray-100 absolute pt-10 md:relative z-10 h-full ${isSideNavbarHidden?' left-[-500px] w-0':'left-0'} transition-all duration-500 ease-in-out`}>
        <FontAwesomeIcon icon={faBars} className="flex absolute right-1 top-1" onClick={()=>{setIsSideNavbarHidden(!isSideNavbarHidden)}}></FontAwesomeIcon>
       {/**
        * 
        * <HistoryMain/>
        */} 
        <NewUser/>
        </div>
    )
}