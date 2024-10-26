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
        },
        addPopularMovie:(state,action)=>{
            state.NowPopularMovie=action.payload;
        },
        addTopRatedMovie:(state,action)=>{
            state.NowTopRatedMovie=action.payload;
        },
        addUpcomingMovie:(state,action)=>{
            state.NowUpcomingMovie=action.payload;
        },
    }
})

export const {addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTopRatedMovie,addUpcomingMovie}=movieSlice.actions;

export default movieSlice.reducer;