import { createSlice } from "@reduxjs/toolkit";

export const nominationSlice = createSlice({
  name: "nomination",
  initialState: {
    value: [],
    id: [],
  },
  reducers: {
    addNomination: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.value.length < 5) {
        state.value.push(action.payload);
        state.id.push(action.payload.imdbID);
      }
    },
    removeNomination: (state, action) => {
      let result = state.value.filter(function (element) {
        return element.imdbID !== action.payload;
      });

      let ids = state.id.filter(function (element) {
        return element !== action.payload;
      });

      console.log(ids);

      state.value = result;
      state.id = ids;
    },
  },
});

export const { addNomination, removeNomination } = nominationSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
export const selectNomination = (state) => state.nomination.value;
export const selectNominationId = (state) => state.nomination.id;

export default nominationSlice.reducer;
