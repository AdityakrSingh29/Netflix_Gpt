import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovie:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.NowPlayingMovie=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovie,addTrailerVideo}=movieSlice.actions;

export default movieSlice.reducer;