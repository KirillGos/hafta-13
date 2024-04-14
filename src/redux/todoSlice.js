import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [
		{ id: 1, title: 'Elma al', completed: false },
		{ id: 2, title: 'Muz al', completed: false },
		{ id: 3, title: 'Süt al', completed: true },
		{ id: 4, title: 'Yumurta al', completed: false },
		{ id: 5, title: 'Ekmek al', completed: false },
	],
    
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},

		tamamlandiAcKapa: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
        isiSil: (state, action ) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
	},
});

export const { addTodo, tamamlandiAcKapa, isiSil } = todoSlice.actions;
export default todoSlice.reducer;