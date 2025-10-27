import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../type';

type UserState = {
    user: User | null;
};

// Load user from localStorage on initialization
const loadUserFromStorage = (): User | null => {
    try {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error('Error loading user from storage:', error);
        return null;
    }
};

const initialState: UserState = {
    user: loadUserFromStorage(), // Load from localStorage
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
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