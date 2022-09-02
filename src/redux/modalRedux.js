import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  delete : false,
  edit : false,
  form : {
    id : '',
    name: "",
    progress_percentage: 0
  },
  id : ''
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
    },
    setForm: (state, action) => {
        state.form  = action.payload
    },
    setId: (state, action) => {
        state.id  = action.payload
    },
  },
});
export const {setmodalDelete, setmodalEdit,setForm, setId } = modalReducer.actions;
export default modalReducer.reducer;
