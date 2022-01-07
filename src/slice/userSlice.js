import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [
    {
      id: 1,
      title: "todo1",
      detail: "this is detail",
      done: false,
    },
  ],
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Math.random(),
        title: action.payload.title,
        detail: action.payload.detail,
        done: false,
      };
      state.push(newUser);
    },

    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
