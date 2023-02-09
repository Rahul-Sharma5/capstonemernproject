import { configureStore } from "@reduxjs/toolkit";
import JobReducer from '../service/Slice/JobSlice'

const store =configureStore({
    reducer:{
        Job:JobReducer
    }
})

export default store;