import { configureStore } from "@reduxjs/toolkit";

import {
  carsReducer,
  addCar,
  removeCar,
  changeSeacrhTerm,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/fromSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSeacrhTerm };
