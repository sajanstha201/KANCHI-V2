import { createContext, useContext, useState } from "react"

const historyStatusContext=createContext()
export const HistoryStatusProvider=({children})=>{
    const [isHistoryHidden,setIsHistoryHidden]=useState(false)
    return(
        <historyStatusContext.Provider value={{isHistoryHidden,setIsHistoryHidden}}>
            {children}
        </historyStatusContext.Provider>
    )
}
export const useHistoryStatus=()=>useContext(historyStatusContext)