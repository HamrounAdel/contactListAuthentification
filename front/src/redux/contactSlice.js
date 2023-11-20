import {createSlice} from '@reduxjs/toolkit'
const contactSlice=createSlice({
    name:'Contact',
    initialState:([
           { 
        name:"hamroun",
          lastName:"hamroun1",
          email:"yah@gmail.fr",
          phone:29656789,
          note:"fhjgk",
          typeuser:"client",
                },
         
    ]),
    reducers:{
      setContact:(state,action)=>{
        return  action.payload

      }
    }
})
export const  {setContact}=contactSlice.actions;
export default contactSlice.reducer