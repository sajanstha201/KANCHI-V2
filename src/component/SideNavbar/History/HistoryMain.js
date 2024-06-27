import { InstanceHistory } from "."
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faInfoCircle,faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const HistoryMain=()=>{
    const [value,setValue]=useState('hello my name is sajan shrestha. I am from Kathmandu, Nepal.')
    return(
     <div className="flex h-full justify-between flex-col items-center py-7">    
            <div>
            <InstanceHistory data={value}/>
            <InstanceHistory data={value}/>
            <InstanceHistory data={value}/>
            </div>
            <div className=" flex items-center justify-center flex-col gap-3">
                <div className="flex items-center gap-2 w-full ">
                    <FontAwesomeIcon icon={faCog}/>
                    <Link to='/user/setting' className="text-xl font-medium">Setting</Link>
                </div>
                <div className="flex items-center gap-2 w-full ">
                    <FontAwesomeIcon icon={faInfoCircle}/>
                    <Link  to='/user/about-us' className="text-xl font-medium">About</Link>
                </div>
            </div>
     </div>

    )
}