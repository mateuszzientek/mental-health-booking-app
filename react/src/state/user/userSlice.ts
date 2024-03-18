import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserState{
    user: null | {
        id: number,
        name: string,
        surname: string,
        email: string
    };
    token: null | string
}

const initialState: UserState = {
    user: null,
    token: localStorage.getItem('ACCESS_TOKEN')
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;

            if(action.payload){
                localStorage.setItem('ACCESS_TOKEN', action.payload);
            }else{
                localStorage.removeItem('ACCESS_TOKEN');
            }

          },
          setUser: (state, action: PayloadAction<UserState['user']>) => {
            state.user = action.payload;
        }
    }
})

export const {setToken, setUser} = userSlice.actions
export default userSlice.reducer
