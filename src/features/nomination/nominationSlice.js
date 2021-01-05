import { createSlice } from "@reduxjs/toolkit";

export const nominationSlice = createSlice({
  name: "nomination",
  initialState: {
    value: [],
  },
  reducers: {
    addNomination: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value.length < 5) {
        state.value.push(action.payload);
      }
    },
    removeNomination: (state, action) => {
      let result = state.value.filter(function (element) {
        return element.imdbID != action.payload;
      });

      state.value = result;
    },
  },
});

export const { addNomination, removeNomination } = nominationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectNomination = (state) => state.nomination.value;

export default nominationSlice.reducer;
