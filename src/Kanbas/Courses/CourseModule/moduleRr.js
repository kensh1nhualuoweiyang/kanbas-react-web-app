
import CourseInfo from "../../CourseInfo"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modules: CourseInfo.moduleList,
    module: {moduleName:"New Module", description:"New Description"},
}


const moduleSlice = createSlice({
    name:"module",
    initialState,
    reducers:{
        addModule: (state,action) => {
            state.modules = [{...action.payload, _id: new Date().getTime().toString()}, ...state.modules]
            state.module =  {moduleName:"New Module", description:"New Description"}
        },
        
        deleteModule: (state,action) =>{
            state.modules = state.modules.filter((item) => item._id !== action.payload)
        },

        updateModule: (state,action) => {
            state.modules = state.modules.map((item) => item._id === action.payload._id ? module:action.payload)
        },

        setModule: (state,action) => {
            state.module = action.payload
        },
    }
})

export const {addModule,deleteModule,updateModule,setModule} = moduleSlice.actions
export default moduleSlice.reducer;