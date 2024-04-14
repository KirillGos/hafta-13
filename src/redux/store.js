import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./todoSlice"
import undosReducer from "./undoSlice"

export default configureStore({
	reducer: {
        todos: todoReducer, 
        undos: undosReducer
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        }),
        
    
}); 