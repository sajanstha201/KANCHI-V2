import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoImage from '../../static/images/logo.png'
import { faBars, faBeer } from '@fortawesome/free-solid-svg-icons'
import { useHistoryStatus } from '../../context/HistoryStatusProvider'
export const GPTHeader=()=>{
    const {isHistoryHidden,setIsHistoryHidden}=useHistoryStatus()
    return(
        <>
            {isHistoryHidden&&<FontAwesomeIcon icon={faBars} className='mr-3 absolute top-2' onClick={()=>{setIsHistoryHidden(!isHistoryHidden)}}></FontAwesomeIcon>}
            <div className='ml-10'>
                <p>NepaliGPT</p>
            </div>
            <div className=" h-[40px] w-[60px] absolute right-0">
                <img src={logoImage}></img>
            </div>
        </>
        
    )
}