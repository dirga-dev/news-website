import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import SavedSlice from '../components/features/SavedSlice'

export const store = configureStore({
    reducer: {
        saved: SavedSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  
})

