import { GPTMain } from "../component/GPTSection"
import { SideNavbar } from "../component/SideNavbar"
import chatbg from '../static/images/bg.png'
export const Home=()=>{
    return(
        <div className="flex flex-row h-[100%] w-full ">
            <SideNavbar/>
            <div className="flex flex-col items-center w-[100%] h-[100%]  " style={{ backgroundImage: `url(${chatbg})`,
            width: '100%',
            height: '100%',        
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
            <GPTMain />
            </div>
            
            
        </div>
    )
}