import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  todo : [],
  item : []
};

export const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    settodoGlobal: (state, action) => {
        state.todo  = action.payload
    },
    setitemGlobal: (state, action) => {
        state.item  = action.payload
    }
  },
});

const getTodo = () => async (dispatch) => {
    const data = await axios.get('https://todos-project-api.herokuapp.com/todos')
  dispatch(
    settodoGlobal(data.data)
  );
};

const getItem = (id) => async (dispatch) => {
    const data = await axios.get(`https://todos-project-api.herokuapp.com/todos/${id}/items`)
};
export {getTodo}
export const {settodoGlobal, setitemGlobal } = todoReducer.actions;
export default todoReducer.reducer;
