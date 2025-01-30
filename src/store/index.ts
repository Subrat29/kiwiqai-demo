import { configureStore } from '@reduxjs/toolkit';
import reportWorkflowReducer from './reportWorkflowSlice';

export const store = configureStore({
  reducer: {
    reportWorkflow: reportWorkflowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;