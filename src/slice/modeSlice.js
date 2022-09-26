import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light"
}

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (state) => {
            if(state.mode === 'light'){
                state.mode = 'dark'
            }else{
                state.mode = 'light'
            }

        }
    }
});

export default modeSlice.reducer;
export const { changeMode } = modeSlice.actions; 