import { createSlice } from "@reduxjs/toolkit";
// Reducer initialized to first
const initialStepperState = {
  step: 1,
};
// Reducers for Stepper
const stepperSlice = createSlice({
  name: "stepper",
  initialState: initialStepperState,
  reducers: {
    increment(state) {
      state.step++;
    },
    decrement(state) {
      state.step--;
    },
  },
});

export const stepperActions = stepperSlice.actions;

export default stepperSlice.reducer;
