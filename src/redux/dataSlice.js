import { createSlice } from '@reduxjs/toolkit'
import { modalFunc } from './modalSlice'

const initialState = {
 data:[],
 keyword:""
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc:(state, action)=>{
      state.data = [...state.data, action.payload]
    },

    sortingDataFunc:(state, action)=>{
      state.data = [...state.data.sort((a,b) => action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null)]
    },

    deleteDataFunc:(state, action)=>{
      state.data = [...state.data.filter(dt=> dt.id !=action.payload)]
    },

    uptadeDataFunc:(state, action)=>{
      state.data = [...state.data.map(dt=> dt.id == action.payload.id ? ({...dt, ...action.payload}) : dt)]
    },

    searchDataFunc:(state, action)=>{
      state.keyword = action.payload
    }
  
}})


export const {searchDataFunc, createDataFunc,deleteDataFunc,uptadeDataFunc,sortingDataFunc} = dataSlice.actions

export default dataSlice.reducer