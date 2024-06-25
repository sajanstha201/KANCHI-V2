import logoImage from '../../static/images/logo.png'
import { Input,Output } from '.'
export const GPTMain=()=>{
    return(
        <div className="flex flex-col w-[80%] h-[100%]">
            <div className="flex justify-between items-center mx-6 h-[10%]">
                <div>
                    <h1>NepaliGPT</h1>
                </div>
                <div className="md:w-[100px] md:h-[80px] sm:h-[40px] sm:w-[60px]">
                    <img src={logoImage}></img>
                </div>
            </div>
            <div className='flex h-[70%] border'>
                 <Output></Output>
            </div>
            <div className='flex h-[20%] border'>
                <Input></Input>
            </div>
        </div>
        
    )
}