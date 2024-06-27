import { FaUserLarge } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
export const NewUser=()=>{
    return(
        <>
        <div className="h-full flex flex-col justify-between py-6 items-center ">

                <h1 className="text-xl font-semibold"> New chat +</h1>
                <div className="flex flex-col gap-3 items-center justify-center" >
                            <div className="flex items-center gap-2 w-full ">
                                <FaUserLarge/>
                                <h1 className="text-xl font-medium">Sign in</h1>
                            </div>

                            <div className="flex items-center gap-2 w-full ">
                              <IoIosSettings/>
                               <h1 className="text-xl font-medium">Setting</h1>
                            </div>

                            <div className="flex items-center gap-2 w-full ">
                               <FcAbout/>
                              <h1 className="text-xl font-medium">About</h1>
                            </div>
                </div>
        </div>
        </>
    )
}