import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoImage from '../../static/images/logo.png'
import { faBars, faBeer } from '@fortawesome/free-solid-svg-icons'
import { useHistoryStatus } from '../../context/HistoryStatusProvider'
export const GPTHeader=()=>{
    const {isHistoryHidden,setIsHistoryHidden}=useHistoryStatus()
    return(
        <>
            {isHistoryHidden&&<FontAwesomeIcon icon={faBars} className='mr-3 absolute top-2' onClick={()=>{setIsHistoryHidden(!isHistoryHidden)}}></FontAwesomeIcon>}
            <div className='flex items-center gap-2 ml-6 '>

                <img src={logoImage} className='h-10 w-14'></img>
                <p>NepaliGPT</p>
            </div>
            
            
        </>
        
    )
}