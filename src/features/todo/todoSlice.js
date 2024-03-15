import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid, text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      return state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateText: (state, action) => {
      const { id, newValue } = action.payload;
      const index = state.todos.findIndex((item) => item.id === id);
      if (index > -1) {
        state.todos[index].text = newValue;
      }
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
