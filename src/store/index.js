import { configureStore } from "@reduxjs/toolkit";

import userDataReducer from "./userData";
import stepperReducer from "./stepper";

const store = configureStore({
  reducer: { userData: userDataReducer, stepper: stepperReducer },
});

export default store;
