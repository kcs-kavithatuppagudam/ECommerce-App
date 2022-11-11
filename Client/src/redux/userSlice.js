import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:{}
}

export const userSlice=createSlice({
 name:'loginUser',
 initialState,
 reducers:{
    getUser:(state,{payload})=>{    
        state.user=payload
    }
 }
})

export const {getUser}=userSlice.actions

export default userSlice.reducer