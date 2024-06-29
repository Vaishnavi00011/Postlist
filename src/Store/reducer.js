import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("data/fetchData",async()=>{
   const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
   return response.data
})
export const deleteData = createAsyncThunk("data/deleteData",async(id)=>{
    await axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
    return id
})
const initialState = {
    data : []
}

const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers : {
      
    },
    extraReducers :(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        .addCase(deleteData.fulfilled,(state,action)=>{
           state.data = state.data.filter((i)=>i.id !== action.payload)
        })
    }
})
export const{deleteFn} = dataSlice.actions
export default dataSlice.reducer

