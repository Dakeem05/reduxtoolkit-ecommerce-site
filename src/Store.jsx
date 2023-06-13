import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import cartReduder from "./features/cart/cartSlice"
import modalReducer from './features/modal/modalSlice';
export const Store = configureStore({
    reducer: {
        cart:cartReduder ,
        modal:modalReducer,
    },
})
