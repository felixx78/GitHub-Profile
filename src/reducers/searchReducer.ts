import { createSlice } from "@reduxjs/toolkit";
import { GithubUser } from "../lib/defition";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    result: {} as GithubUser,
  },
  reducers: {
    setResult(state, action: { payload: GithubUser }) {
      state.result = action.payload;
    },
  },
});

export const { setResult } = searchSlice.actions;
export default searchSlice.reducer;
