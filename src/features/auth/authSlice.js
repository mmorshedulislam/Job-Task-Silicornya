import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {email: '', position: ''}
}

export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        
    }
})