import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "../Courses/CourseModule/moduleRr";


const store = configureStore({
    reducer:{
        moduleReducer,
    }
})

export default store