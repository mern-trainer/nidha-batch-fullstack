import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        username: "",
        email: ""
    },
    reducers: {
        createUser: (state, action) => { 
            state.name = action.payload.name
            state.username = action.payload.username
            state.email = action.payload.email
        },
        logoutUser: (state) => {
            state.name = ""
            state.username = ""
            state.email = ""
        }
    }
})  

export const { createUser, logoutUser } = userSlice.actions
export const { reducer: userReducer } = userSlice
