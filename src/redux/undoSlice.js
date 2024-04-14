import { createSlice } from '@reduxjs/toolkit';

export const undoSlice = createSlice({
	name: 'undos',
	initialState: [],
    
	reducers: {
		saveTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: action.payload.completed
			}
			state.push(todo);
		}	
	},
});

export const { saveTodo  } = undoSlice.actions;
export default undoSlice.reducer;