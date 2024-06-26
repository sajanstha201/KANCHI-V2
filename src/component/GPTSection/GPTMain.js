
import { Input,Output } from '.'
import { GPTHeader } from './GPTHeader'
export const GPTMain=()=>{
    return(
        <>
            <div className="flex relative items-center mx-6 h-[10%] z-0">
                <GPTHeader/>
            </div>
            <div className='flex h-[70%] border'>
                 <Output></Output>
            </div>
            <div className='flex h-[20%] border'>
                <Input></Input>
            </div>
        </>
        
    )
}