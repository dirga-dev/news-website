import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	articles: [],
};

export const savedSlice = createSlice({
	name: 'saved',
	initialState,
	reducers: {
		savedNews: (state, action) => {
			const findNews = state.articles.find(news => news.title === action.payload.title);
			if (findNews) {
				state.articles = state.articles.filter(news => news.title !== action.payload.title);
			} else {
				state.articles = [action.payload, ...state.articles];
			}
		},
	},
});

export const { savedNews } = savedSlice.actions;

export default savedSlice.reducer;
