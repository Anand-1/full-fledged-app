import { createSlice } from "@reduxjs/toolkit";

const initialInfoState = {
  step: 1,
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  isCitizen: true,
  gitProfile: "",
  CvValue: "",
  CoverValue: "",
};
// reducers for user input
const userDataSlice = createSlice({
  name: "userData",
  initialState: initialInfoState,
  reducers: {
    setFirstName(state, action) {
      state.firstname = action.payload;
    },
    setLastName(state, action) {
      state.lastname = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setGitValue(state, action) {
      state.gitProfile = action.payload;
    },
    setCitizenTrue(state) {
      state.isCitizen = true;
    },
    setCitizenFalse(state) {
      state.isCitizen = false;
    },
  },
});

export const userDataActions = userDataSlice.actions;

export default userDataSlice.reducer;
