import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = { message: null };

// create alert slice to handle start, pause, timer actions below
const alertSlice = createSlice({
    name : "alert", 
    initialState: INITIAL_STATE,
    reducers:{
        reset:(state, action)=>{
            state.message ="";
        }

    },
    extraReducers:{
        "timer/startTimer":(state, action) =>{
            state.message = "Timer Start"
        },
        "timer/pauseTimer" :(state, action) =>{
            state.message = "Timer pause"
        },
        "timer/resetTimer": (state, action) => {
            state.message = "Timer set to 0.";
          }
    }
})

// export the alert reducer function here
export const alertReducer = alertSlice.reducer;

export const alertActions = alertSlice.actions

// create and export alert selector function here
export const alertSelector = (state) => state.alertReducer.message;
