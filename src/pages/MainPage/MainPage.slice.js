import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { services } from "./services/MainPageServices";

const initialState = {
	loading: false,
	error: null,
	rows: [],
	isCreatingItem: false,
};

export const getProcessData = createAsyncThunk(
	"process/getProcessData",
	async (data, thunkAPI) => {
		const response = await services.getProcessDataService();
		return response
			? response
			: thunkAPI.rejectWithValue("get process data error");
	}
);

export const filterProcessData = createAsyncThunk(
	"process/filterProcessData",
	async (filter, thunkAPI) => {
		const response = await services.filterProcessDataService(filter);
		return response
			? { response, filter }
			: thunkAPI.rejectWithValue("filter process data error");
	}
);

export const createItem = createAsyncThunk(
	"process/createItem",
	async (item, thunkAPI) => {
		const response = await services.createItemService(item);
		return response ? response : thunkAPI.rejectWithValue("create item error");
	}
);

const processSlice = createSlice({
	name: "process",
	initialState,
	reducers: {
		setIsOpen: {
			prepare: (open) => {
				return { payload: open };
			},
			reducer: (state, { payload }) => {
				state.isCreatingItem = payload;
			},
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProcessData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getProcessData.fulfilled, (state, { payload }) => {
			state.rows = payload;
			state.loading = false;
		});
		builder.addCase(getProcessData.rejected, (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		});
		builder.addCase(filterProcessData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(filterProcessData.fulfilled, (state, { payload }) => {
			payload = payload.response.data.filter(
				(item) => item.title === payload.filter
			);
			state.rows.data = payload;
			state.loading = false;
		});
		builder.addCase(filterProcessData.rejected, (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		});
		builder.addCase(createItem.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(createItem.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(createItem.rejected, (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		});
	},
});

export const rowsSelect = (state) => state.process.rows.data;
export const isCreatingModalOpenSelect = (state) =>
	state.process.isCreatingItem;

export const { setIsOpen } = processSlice.actions;

export default processSlice.reducer;
