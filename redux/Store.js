import { configureStore } from "@reduxjs/toolkit";
import productReducer from './BikeSlice'
export const store = configureStore({
    reducer: {
        bikes:productReducer
    }
})