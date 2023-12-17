import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    result: [],
  },
  reducers: {
    setResult(state, action) {
      state.result = action.payload;
    },
  },
});

export const { setResult } = searchSlice.actions;
export default searchSlice.reducer;
