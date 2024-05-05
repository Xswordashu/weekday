import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilters: (state,action) => {
       const {name,value} = action.payload;
       state[name] = value;
    },
   
  },
})


export const { updateFilters} = filterSlice.actions

export default filterSlice.reducer