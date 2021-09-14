import { configureStore } from "@reduxjs/toolkit";
import processSlice from "../pages/MainPage/MainPage.slice";

const store = configureStore({
	reducer: {
		process: processSlice,
	},
});

export default store;
