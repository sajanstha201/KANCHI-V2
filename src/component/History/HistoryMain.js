import { InstanceHistory } from "."
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useHistoryStatus } from "../../context/HistoryStatusProvider";
export const HistoryMain=()=>{
    const {isHistoryHidden,setIsHistoryHidden}=useHistoryStatus()
    const [value,setValue]=useState('hello my name is sajan shrestha. I am from Kathmandu, Nepal.')
    return(
        <div className={`w-[300px]  absolute pt-10  z-10 h-full ${isHistoryHidden?' left-[-500px]':'left-0'} transition-all duration-300 ease-in-out`}>
        <FontAwesomeIcon icon={faBars} className="flex absolute right-1 top-1" onClick={()=>{setIsHistoryHidden(!isHistoryHidden)}}></FontAwesomeIcon>
            <h1>This is HistoryMain</h1>
            <InstanceHistory data={value}/>
            <InstanceHistory data={value}/>
            <InstanceHistory data={value}/>
        </div>
    )
}