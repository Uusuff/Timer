import { configureStore } from '@reduxjs/toolkit'
import trackerReducer from './trackersSlice'

export default configureStore({
  reducer: trackerReducer
})