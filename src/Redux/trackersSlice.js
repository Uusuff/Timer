import { createSlice } from '@reduxjs/toolkit'
import { getTrackers, updateTrackers } from '../servises/ls.servises';
import moment from 'moment';

export const trackersSlice = createSlice({
   name: 'trackers',
   initialState: {
      trackers: getTrackers() ?? []  
   },
   reducers: {
      addTracker: (state, action) => {
         state.trackers.unshift(action.payload);
         updateTrackers(state.trackers);
      },
      removeTracker: (state, action) => {
         state.trackers = state.trackers.filter(track => {
            return (track.id !== action.payload)
         })
         updateTrackers(state.trackers);
      },
      play: (state, action) => {
         state.trackers = state.trackers.map(track => {
            if (track.id === action.payload) {
               track.isPlay = true;
               track.timeStart = moment().valueOf();  
            }
            return track
         })
         updateTrackers(state.trackers);
      },
      pause: (state, action) => {
         state.trackers = state.trackers.map(track => {
            if (track.id === action.payload.id) {
               track.isPlay = false;
               track.time += action.payload.time;
               track.timeAct = 0;
            }
            return track;
         })
         updateTrackers(state.trackers);
      },
      seveTimeAct: (state, action) =>{
         state.trackers = state.trackers.map(track => {
            if (track.id === action.payload) {
               track.timeAct = moment().valueOf() - track.timeStart;  
            }
            return track; 
         })
         updateTrackers(state.trackers);
      }
   }
})

export const { addTracker, removeTracker, play, pause, seveTimeAct } = trackersSlice.actions;

export default trackersSlice.reducer;