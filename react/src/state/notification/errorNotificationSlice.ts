import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ErrorNotificationState{
    message: string
}

const initialState: ErrorNotificationState = {
    message: ""
}

const errorNotificationSlice = createSlice({
    name: "errorNotification",
    initialState,
    reducers: {
        setErrorNotification: (state, action: PayloadAction<string>) =>{
            state.message = action.payload
        }
    }
})

export const {setErrorNotification} = errorNotificationSlice.actions
export default errorNotificationSlice.reducer
