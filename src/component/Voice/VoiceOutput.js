import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faInfo, faInfoCircle, faLitecoinSign, faMicrophoneLinesSlash, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone"


export const VoiceOutput=()=>{
    const [Speaking,setSpeaking]=useState(true)
    return(
        <>
        
    {Speaking && <FontAwesomeIcon icon={faMicrophone} size='2x' onClick={()=>setSpeaking(false)}></FontAwesomeIcon>} 
        
        </>
    )
}