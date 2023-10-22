import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "../Courses/CourseModule/moduleReducer";


const store = configureStore({
    reducer:{
        moduleReducer,
    }
})

export default store