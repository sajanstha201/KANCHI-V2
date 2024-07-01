import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoImage from '../../static/images/logo.png'
import { faBars, faBeer } from '@fortawesome/free-solid-svg-icons'
import { useSideNavbar } from '../../context/SideNavbarProvider'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { DropdownButton,Dropdown, Button } from 'react-bootstrap'
import { useState } from 'react'
export const GPTHeader=()=>{
    const {isSideNavbarHidden,setIsSideNavbarHidden}=useSideNavbar()
    const [isUserDisplay,setIsUserDisplay]=useState(false)
    return(
        <>
            {isSideNavbarHidden&&<FontAwesomeIcon size='2x' icon={faBars} className='mr-3 absolute top-2' onClick={()=>{setIsSideNavbarHidden(!isSideNavbarHidden)}}></FontAwesomeIcon>}
           <div className='w-full flex justify-between pr-10'>

                <div className=' flex items-center gap-2 ml-10'>
                    <img src={logoImage} className='h-10 w-16'></img>
                    <p>NepaliGPT</p>
                </div>
                <div>

                </div>
                <div>
                    <div className='flex relative flex-col'>
                        <FontAwesomeIcon icon={faUser} size='2x' className='hover:text-blue-800 hover:cursor-pointer rounded-full' onClick={()=>setIsUserDisplay(!isUserDisplay)} />
                        <div className={` ${isUserDisplay?'':'hidden'} absolute w-[150px] flex flex-col left-[-120px] top-10 items-start rounded-md bg-gray-100`}>
                            <div className='w-full  h-[50px] flex items-cener justify-center border rounded-md '>My Profile</div>
                            <div className='w-full h-[50px] flex items-cener justify-center border rounded-md '>Setting</div>
                        </div>
                    </div>
                </div>
           </div>
        </>
        
    )
}