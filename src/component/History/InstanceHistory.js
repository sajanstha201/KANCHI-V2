export const InstanceHistory=({data})=>{
    return(
        <div className="mb-1 px-1 bg-gray-300 hover:bg-gray-400   h-10 rounded-sm flex items-center justify-center">
        <div className="overflow-hidden text-[12px] font-medium h-5">{data}</div>
        
        </div>
    )
}