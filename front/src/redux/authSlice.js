import {createSlice} from '@reduxjs/toolkit'
const authSlice=createSlice({
    name:'Auth',
    
    initialState:(
           { 
          name:"hamroun",
          lastName:"adel",
          email:"yah@gmail.fr",
          password:'adel2965',
          role:"admin",
                }
         
    ),
    reducers:{
      setAuth:(state,action)=>{
        return  action.payload

      }
    }
})
export const  {setAuth}=authSlice.actions;
export default authSlice.reducer