import { configureStore } from "@reduxjs/toolkit";

import dataReducer from '../features/dateSlice';


export const store = configureStore({
    reducer:{
        data:dataReducer
    }
})
