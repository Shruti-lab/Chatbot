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

export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;
export const yourMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
    // Custom middleware logic here
    return next(action);
}