
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modules: [],
    module: {moduleName:"New Module", description:"New Description"},
}
const moduleSlice = createSlice({
    name:"modules",
    initialState,
    reducers:{
        setModules: (state,action) => {
            state.modules = action.payload;
        },
        addModule: (state,action) => {
            state.modules = [{...action.payload, _id: new Date().getTime().toString()}, ...state.modules]
            state.module =  {moduleName:"New Module", description:"New Description"}
        },
        
        deleteModule: (state,action) =>{
            state.modules = state.modules.filter((item) => item._id !== action.payload)
        },

        updateModule: (state,action) => {
            state.modules = state.modules.map((item) => item._id === action.payload._id ?action.payload : item)
        },

        setModule: (state,action) => {
            state.module = action.payload
        },
    }
})

export const {addModule,deleteModule,updateModule,setModule,setModules} = moduleSlice.actions
export default moduleSlice.reducer;