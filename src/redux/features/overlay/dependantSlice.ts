import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface OverlayState {
  addDependant: boolean;
}

const initialState: OverlayState = {
  addDependant: false,
};

export const dependantSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openAddDependant: (state) => {
      state.addDependant = true;
    },
    closeAddDependant: (state) => {
      state.addDependant = false;
    },
    // toggleModal: (state) => {
    //   state.addDependant = !state.addDependant;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { openAddDependant, closeAddDependant } = dependantSlice.actions;
export default dependantSlice.reducer;
