import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoImage from '../../static/images/logo.png'
import { faBars, faBeer } from '@fortawesome/free-solid-svg-icons'
import { useSideNavbar } from '../../context/SideNavbarProvider'
export const GPTHeader=()=>{
    const {isSideNavbarHidden,setIsSideNavbarHidden}=useSideNavbar()
    return(
        <>
            {isSideNavbarHidden&&<FontAwesomeIcon size='2x' icon={faBars} className='mr-3 absolute top-2' onClick={()=>{setIsSideNavbarHidden(!isSideNavbarHidden)}}></FontAwesomeIcon>}
            <div className=' flex items-center gap-2 ml-10'>
                <img src={logoImage} className='h-10 w-16'></img>
                <p>NepaliGPT</p>
            </div>
        </>
        
    )
}