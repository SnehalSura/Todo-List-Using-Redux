import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id: 1, task: "Coding", isDone: false}],
}

export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    // reducers: Object of reducer functions
    reducers: {
      addTodo: (state,action) => {
        const newTodo = {
            id: nanoid(),
            task: action.payload,   // action.payload : can be task / id of the newTodo according to the action performed
            isDone: false

        };
        state.todos.push(newTodo);       // direct mutation of the array
      },

      deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },

      markAsDone: (state, action) => {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };    // Return the updated todo
          }
          return todo;                              // Return the unmodified todo
        });
      }      
      
    }
  })

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = TodoSlice.actions;
export default TodoSlice.reducer;

