import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faInfo, faInfoCircle, faLitecoinSign, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt";
export const NewUser=()=>{
    return(
        <>
        <div className="h-full flex flex-col justify-between py-6 items-center ">
            
                <h1 className="text-xl font-semibold"> New chat +</h1>
                <div className="flex flex-col gap-4 items-center justify-center" >
                            <div className="flex items-center gap-2 bg-cyan-500 shadow-lg shadow-cyan-500/50  px-12 rounded-lg py-2 w-full text-white hover:scale-105 ">
                            <FontAwesomeIcon icon={faSignIn}/>
                                <h1 className="text-xl font-medium">Sign in</h1>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-300  px-12 rounded-lg py-2 w-full  hover:scale-105 ">
                            <FontAwesomeIcon icon={faUser}/>
                                <h1 className="text-xl font-medium">Log in</h1>
                            </div>
                            

  
                </div>
        </div>
        </>
    )
}