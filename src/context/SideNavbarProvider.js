import { createContext, useContext, useState } from "react"

const SideNavbarContext=createContext()
export const SideNavbarProvider=({children})=>{
    const [isSideNavbarHidden,setIsSideNavbarHidden]=useState(false)
    return(
        <SideNavbarContext.Provider value={{isSideNavbarHidden,setIsSideNavbarHidden}}>
            {children}
        </SideNavbarContext.Provider>
    )
}
export const useSideNavbar=()=>useContext(SideNavbarContext)