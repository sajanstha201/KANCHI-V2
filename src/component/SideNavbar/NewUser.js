import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faInfo, faInfoCircle, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt";
export const NewUser=()=>{
    return(
        <>
        <div className="h-full flex flex-col justify-between py-6 items-center ">
            
                <h1 className="text-xl font-semibold"> New chat +</h1>
                <div className="flex flex-col gap-3 items-center justify-center" >
                            <div className="flex items-center gap-2 w-full ">
                            <FontAwesomeIcon icon={faSignIn}/>
                                <h1 className="text-xl font-medium">Sign in</h1>
                            </div>

  
                </div>
        </div>
        </>
    )
}