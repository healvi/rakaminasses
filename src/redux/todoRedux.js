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
const createItem = (id, form) => async (dispatch) => {
  const res = {
    name: form.name,
    progress_percentage: form['progress_percentage']
}
  await axios.post(`https://todos-project-api.herokuapp.com/todos/${id}/items`, res).then((v) => {
    dispatch(getTodo())
  })
  
};
const updateItem = (id, form) => async (dispatch) => {
  const res = {
    "target_todo_id": form['todo_id'],
    "name": form.name,
    progress_percentage: form['progress_percentage']
}
  await axios.patch(`https://todos-project-api.herokuapp.com/todos/${id}/items/${form.id}`, res).then((v) => {
    dispatch(getTodo())
  })
  
};
const deleteItem = (id, form) => async (dispatch) => {
  await axios.delete(`https://todos-project-api.herokuapp.com/todos/${id}/items/${form.id}`).then((v) => {
    dispatch(getTodo())
  })
};

const moveToTask = (id, todos, directives, idItem) => async (dispatch) => {
  const index = todos.findIndex((v) => v.id === id)
  let res = {}
  if (directives === 'kiri') {
    if (index >= 0) {
      res = {
        "target_todo_id": todos[index - 1].id,
    }
    }
} else {
  if (index < todos.length) {
    res = {
      "target_todo_id": todos[index + 1].id,
    }
  }
  }

  await axios.patch(`https://todos-project-api.herokuapp.com/todos/${id}/items/${idItem}`, res).then((v) => {
    dispatch(getTodo())
  })
};

export {getTodo , createItem, updateItem, deleteItem, getItem, moveToTask}
export const {settodoGlobal, setitemGlobal } = todoReducer.actions;
export default todoReducer.reducer;
