import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface OverlayState {
  isOpen: boolean;
}

const initialState: OverlayState = {
  isOpen: false,
};

export const toggleModalSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal, toggleModal } = toggleModalSlice.actions;
export default toggleModalSlice.reducer;
