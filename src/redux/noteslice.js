import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

export const noteSlice = createSlice({
    name:'notes',
    initialState:{
       value: JSON.parse(localStorage.getItem('notes')) || []
    },
    reducers:{
        addNote:(state,action)=>{
                state.value.push({id:nanoid(),title:action.payload.title,note:action.payload.note,color:action.payload.color}) 
                localStorage.setItem('notes',JSON.stringify(state.value))
                    
            
        },
        removeNote:(state,action)=>{
            if(window.confirm('Are you sure?')){
                console.log(action.payload.id);
                state.value=state.value.filter((n)=>n.id!==action.payload)
            }
        }
    }

})

export const{addNote,removeNote}=noteSlice.actions

export default noteSlice.reducer