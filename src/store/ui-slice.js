import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.show = !state.show;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
