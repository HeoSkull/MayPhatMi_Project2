import { configureStore } from "@reduxjs/toolkit";
import userSlice from './reducer/user.slice'

export const store = configureStore({
    reducer: {
        user: userSlice
    },  
});
export type StoreState = ReturnType<typeof store.getState>;
export type MapDispatch = typeof store.dispatch;