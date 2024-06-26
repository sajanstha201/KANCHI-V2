import { InstanceHistory } from "."
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
export const HistoryMain=()=>{
    const [value,setValue]=useState('hello my name is sajan shrestha. I am from Kathmandu, Nepal.')
    return(
        <>            
        <InstanceHistory data={value}/>
        <InstanceHistory data={value}/>
        <InstanceHistory data={value}/>
        </>

    )
}