import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  delete : false,
  edit : false,
};

export const modalReducer = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setmodalDelete: (state, action) => {
        state.delete  = action.payload
    },
    setmodalEdit: (state, action) => {
        state.edit  = action.payload
    }
  },
});
export const {setmodalDelete, setmodalEdit } = modalReducer.actions;
export default modalReducer.reducer;
