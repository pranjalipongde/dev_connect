import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, //stores logged in users info
  loading: true, //useful for conditional rendering during the auth
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      //called when user logs in
      state.user = action.payload;
      state.loading = false;
    },
    logoutUser(state) {
      //called when user logs out
      state.user = null;
      state.loading = false;
    },
  },
});

//export actions to use in other components
export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
