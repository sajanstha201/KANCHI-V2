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
     </div>

    )
}