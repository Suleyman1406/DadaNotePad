import { configureStore } from "@reduxjs/toolkit";
import  NoteReducer from './noteslice';

export default configureStore({reducer:{notes:NoteReducer}});