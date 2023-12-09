import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as ScreenOrientation from "expo-screen-orientation";

const initialState = {
  value: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});

export const changeScreenOrientationLandscape = createAsyncThunk(
  "",
  async () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }
);
export const changeScreenOrientationPortrait = createAsyncThunk(
  "",
  async () => {
    ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
);

// Action creators are generated for each case reducer function
export const {} = appSlice.actions;

export default appSlice.reducer;
