import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
      console.log(state.todo);
    },
    deleteTodo: (state, action) => {
      state.todo.splice(action.payload.id);
      console.log(state.todo);
    },
    changeStatus: (state, action) => {
      state.todo = state.todo.map((item) => {
        if (item.id === action.payload.id) {
          item.completed = action.payload.status;
        }
        return item;
      });
      console.log(state.todo);
    },
  },
});

export const { setIdTodo, addTodo, changeStatus, changeTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
