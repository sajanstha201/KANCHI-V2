import { InstanceHistory } from "."
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useHistoryStatus } from "../../context/HistoryStatusProvider";
export const HistoryMain=()=>{
    const {isHistoryHidden,setIsHistoryHidden}=useHistoryStatus()
    const [value,setValue]=useState('hello my name is sajan shrestha. I am from Kathmandu, Nepal.')
    return(
        <div className={` bg-gray-100 absolute pt-10 md:relative z-10 h-full ${isHistoryHidden?' w-0 ':' w-[300px]'} transition-all duration-500 ease-in-out`}>
        <FontAwesomeIcon icon={faBars} className="flex absolute right-1 top-1" onClick={()=>{setIsHistoryHidden(!isHistoryHidden)}}></FontAwesomeIcon>
            <InstanceHistory data={value}/>
            <InstanceHistory data={value}/>
            <InstanceHistory data={value}/>
        </div>
    )
}