import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { HistoryMain } from "./History"
import { useSideNavbar } from "../../context/SideNavbarProvider"
import { NewUser } from "./NewUser"
import { NewTab } from "./NewTab"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export const SideNavbar=()=>{
    const {isSideNavbarHidden,setIsSideNavbarHidden}=useSideNavbar()
    return(
        <div className={`overflow-auto bg-gray-100 absolute pt-10 pb-11 md:relative z-10 h-full ${isSideNavbarHidden?' left-[-500px] w-0':'w-[300px] left-0'} transition-all duration-500 ease-in-out`}>
            <div >
                <FontAwesomeIcon icon={faBars} className="flex absolute right-2 top-2" size='2x' onClick={()=>{setIsSideNavbarHidden(!isSideNavbarHidden)}}></FontAwesomeIcon>
            </div>

            <div className="flex h-[85%] flex-col justify-center items-center ">
                <NewTab/>
                <HistoryMain/> 
            </div>
    
            <div className=" flex justify-center  flex-col gap-3 pl-10 pb-5 ">
                    <div className="  flex items-center justify-center w-fit gap-3    ">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        <Link  to='/about-us' className="text-2xl font-bold hover:text-blue-700">About</Link>
                    </div>
                    <div className="  flex items-center justify-center w-fit gap-3   ">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        <Link  to='/contact-us' className="text-2xl font-bold hover:text-blue-700">Contact Us</Link>
                    </div>
                    <div className="  flex items-center justify-center w-fit gap-3   ">
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        <Link  to='/help' className="text-2xl font-bold hover:text-blue-700">Help</Link>
                    </div>
            </div>
        </div>
    )
}