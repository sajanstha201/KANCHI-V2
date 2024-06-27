import {  createContext, useState,useContext } from "react"
const chatVoiceStatusContext=createContext()
const chatIOContext=createContext()
const voiceIOContext=createContext()
export const ChatVoiceStatusProvider=({children})=>{
    const [isChatActivate,setIsChatActivate]=useState(true)
    const [chatIO,setChatIO]=useState({question:`my name is Nepal GPT made by RAmy name is Nepal GPT made by RANArnold Bennett (1867–1931) was an English author who wrote 34 novels, 7 volumes of short stories and a daily journal of more than a million words. He also wrote or co-wrote 13 playsmy name is Nepal GPT made by RANArnold Bennett (1867–1931) was an English author who wrote 34 novels, 7 volumes of short stories and a daily journal of more than a million words. He also wrote or co-wrote 13 playsNArnold Bennett (1867–1931) was an English author who wrote 34 novels, 7 volumes of short stories and a daily journal of more than a million words. He also wrote or co-wrote 13 plays`,answer:`my name is Nepal GPT made by RANArnold Bennett (1867–1931) was an English author who wrote 34 novels, 7 volumes of short stories and a daily journal of more than a million words. He also wrote or co-wrote 13 plays, wrote articles and stories for more than 100 newspapers and periodicals, worked in and briefly ran the UK's Ministry of Information in the First World War, and wrote for the cinema in the 1920s. He was the most financially successful British author of his day. Because his books appealed to a wide public rather than to literary cliques and élites, and for his adherence to realism, Virginia Woolf and other writers and supporters of the modernist school belittled him, and his fiction became neglected after his death. Studies of his writing since the 1970s have led to a re-evaluation of Bennett's work, and his finest novels, including Anna of the Five Towns (1902), The Old Wives' Tale (1908), Clayhanger (1910) and Riceyman Steps (1923), are now widely recognised as major works. (Full article...).`})
    const [voiceIO,setVoiceIO]=useState({})
    return(

        <chatVoiceStatusContext.Provider value={{isChatActivate,setIsChatActivate}}>
            <chatIOContext.Provider value={{chatIO,setChatIO}}>
                <voiceIOContext.Provider value={{voiceIO,setVoiceIO}}>
                {children}
                </voiceIOContext.Provider>
            </chatIOContext.Provider>
        </chatVoiceStatusContext.Provider>
    )
}
export const useChatVoiceStatus=()=>useContext(chatVoiceStatusContext)
export const useChatIO=()=>useContext(chatIOContext)
export const useVoiceIO=()=>useContext(voiceIOContext)