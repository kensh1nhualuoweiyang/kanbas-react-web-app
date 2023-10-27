import { configureStore } from "@reduxjs/toolkit";
import moduleRr from "../Courses/CourseModule/moduleRr";


const store = configureStore({
    reducer:{
        moduleRr,
    }
})

export default store