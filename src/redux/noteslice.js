import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const defaultArr=[{id:'asdasjdnasd521sbd',title:'Add a title to your note',note:'You can choose a color while adding notes. The notes you add will not be lost even if you refresh the page.',color:'rgba(240, 98, 146'}]
export const noteSlice = createSlice({
    name:'notes',
    initialState:{
       value: JSON.parse(localStorage.getItem('notes')) || defaultArr
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
        },
        filterNotes:(state,action)=>{
            state.value= JSON.parse(localStorage.getItem('notes')) || defaultArr;
            let arr=state.value;
            state.value=arr.filter((n)=>n.title.includes(action.payload)|| n.note.includes(action.payload))
        }
    }

})

export const{addNote,removeNote,filterNotes}=noteSlice.actions

export default noteSlice.reducer