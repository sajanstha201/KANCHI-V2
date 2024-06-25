import { createSlice } from "@reduxjs/toolkit";

export const UserProfileSlice=createSlice({
    name:'userProfile',
    initialState:{
        'username':'',
        'id':'',
        'token':'',
    },
    reducers:{
        setUserInfo:(state,action)=>{
            const userInfo=action.payload
            state.username=userInfo.username
            state.id=userInfo.id
        },
        setToken:(state,action)=>[
            state.token=action.payload
        ]
    }
})
export default UserProfileSlice.reducer
export const {setUserInfo,setToken}=UserProfileSlice.actions