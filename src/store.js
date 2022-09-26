import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import modalReducer from './slice/modalSlice';
import modeReducer from './slice/modeSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        mode: modeReducer
    },
});