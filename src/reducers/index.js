import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './resume.reducer';
export const store = configureStore({
  reducer: {
    resumeReducer,
  },
});
