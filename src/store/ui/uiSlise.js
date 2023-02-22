import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    isOpen: false,
    message: "",
    severity: "",
  },
};

export const uiSlise = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showSnackBar(state, action) {
      state.snackbar.isOpen = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },

    closeSnackBar(state) {
      state.snackbar = initialState.snackbar;
    },
  },
});

export const uiActions = uiSlise.actions;
