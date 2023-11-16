import { configureStore } from "@reduxjs/toolkit";
 import contactSlice from "./contactSlice";
 import authSlice from "./authSlice";
 export default configureStore({
   reducer:{
      Contact:contactSlice,
      Auth:authSlice
   } 
 })