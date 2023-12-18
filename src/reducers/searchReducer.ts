import { createSlice } from "@reduxjs/toolkit";
import { GithubUser } from "../lib/defition";

type initialStateT = {
  result: GithubUser | undefined;
};
const initialState: initialStateT = {
  result: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setResult(state, action: { payload: GithubUser }) {
      state.result = action.payload;
    },
  },
});

export const { setResult } = searchSlice.actions;
export default searchSlice.reducer;
