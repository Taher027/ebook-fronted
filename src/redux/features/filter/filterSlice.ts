import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilter {
    searchTerm:string | undefined;
    genre:string | null;
    publicationDate:number | null;
}

const initialState:IFilter = {
    searchTerm:"",
    genre:null,
    publicationDate:null
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        insertSearchTerm:(state,action:PayloadAction<string | undefined>)=>{
            state.searchTerm = action.payload
        },
        toggleGenre:(state, action:PayloadAction<string | null>)=>{
            state.genre = action.payload;
        },
        togglePublicationYear:(state, action:PayloadAction<number | null>)=>{
            state.publicationDate =action.payload;
        }



    }
})

export const {insertSearchTerm, toggleGenre,togglePublicationYear}= filterSlice.actions;
export default filterSlice.reducer