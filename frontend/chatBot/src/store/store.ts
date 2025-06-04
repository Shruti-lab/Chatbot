import {configureStore} from '@reduxjs/toolkit';    
import chatSlice from '../features/slices/chatSlice';

export const store = configureStore({
    reducer:{
        chat: chatSlice
    },
    middleware: (getDefaultMiddleware: () => string | any[]) =>
    getDefaultMiddleware().concat(yourMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})