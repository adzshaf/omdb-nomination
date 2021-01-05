import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import nominationReducer from "../features/nomination/nominationSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    nomination: nominationReducer,
  },
});
