import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../slices/themeSlice";
import deviceReducer from "../slices/deviceSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        device: deviceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
