import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone"
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';



export const VoiceOutput=()=>{
    const [speaking,setSpeaking]=useState(true)
    return(
        <>
        
    {<FontAwesomeIcon  icon={speaking?faVolumeUp :faVolumeMute} size='2x' onClick={()=>setSpeaking(!speaking)} className='hover:text-blue-700 hover:cursor-pointer'></FontAwesomeIcon>} 
        
        </>
    )
}