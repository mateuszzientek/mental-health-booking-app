import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import userReducer from "./user/userSlice"
import notificationReducer from "./notification/notificationSlice";
import errorNotificationReducer from "./notification/errorNotificationSlice";



export const store = configureStore({
    reducer: {
      theme: themeReducer,
      user: userReducer,
      notification: notificationReducer,
      errorNotification: errorNotificationReducer
    },
    devTools: true,
  });


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
