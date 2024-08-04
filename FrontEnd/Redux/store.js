import { configureStore }  from "@reduxjs/toolkit";
import reduxReducer from "./React_Slice/expense.reduxSlice"

 let store = configureStore({
    reducer:{
        cart:reduxReducer,
    }
});

export default store;