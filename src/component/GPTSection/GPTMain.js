
import { Input,Output } from '.'
import { GPTHeader } from './GPTHeader'
export const GPTMain=()=>{
    return(
        <>
            <div className="flex relative items-center justify-center mx-6 h-[10%] w-[95%] ">
                <GPTHeader/>
            </div>
            <div className='h-[90%] relative flex-col flex md:w-[1000px] sm:w-[500px] overflow-auto' >
                <div className='flex h-[85%]'>
                    <Output></Output>
                </div>
                <div className='flex h-[15%]'>
                    <Input></Input>
                </div>
            </div>

        </>
        
    )
}