import { createSlice, nanoid } from '@reduxjs/toolkit';


// 1 intial stage

const initialState = {
    todos: [
        {
            id: 1, text: "Hello world"
        }
    ]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: { // it contains properties and function
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }

            state.todos.push(todo)

        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            if (todos.id == action.payload.id) {
                state.todos.text = todo.action.payload
            }
        }
    }

})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
