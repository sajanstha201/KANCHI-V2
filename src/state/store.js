import { configureStore } from "@reduxjs/toolkit";
import BaseUrlSlice from "./BaseUrlSlice";
export const store=configureStore({
    reducer:{
        baseUrl:BaseUrlSlice
    }
})