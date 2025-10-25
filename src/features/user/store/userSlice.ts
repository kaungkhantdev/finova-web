import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../type';

type UserState = {
    user: User | null;
};
  
const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user', // Keep this
    initialState,
    reducers: {
        setUser(state, action) { // More descriptive than 'addUser'
            state.user = action.payload;
            // Persist to localStorage
            try {
                localStorage.setItem('user', JSON.stringify(action.payload));
            } catch (error) {
                console.error('Error saving user to storage:', error);
            }
        },
        clearUser(state) {
            state.user = null;
            // Clear from localStorage
            try {
                localStorage.removeItem('user');
            } catch (error) {
                console.error('Error clearing user from storage:', error);
            }
        }
    }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;