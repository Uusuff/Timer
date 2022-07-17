import { createSlice } from '@reduxjs/toolkit'
import { getTrackers, pushTracker, updateTrackers } from '../servises/ls.servises';

export const trackersSlice = createSlice({
  name: 'trackers',
  initialState: {
      trackers: getTrackers()
  },
  reducers: {
   addTracker: (state, action) => {
      pushTracker(action.payload);
    },
    removeTracker: (state, action) => {
      updateTrackers(state.trackers.filter(track => {
         if (track.id !== action.payload) return true
     }))
   }
  }
})

export const {addTracker, removeTracker } = trackersSlice.actions;

export default trackersSlice.reducer;