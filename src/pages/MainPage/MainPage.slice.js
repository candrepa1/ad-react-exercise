import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { services } from "./services/MainPageServices";

const initialState = {
	loading: false,
	error: null,
	rows: [],
	isCreatingItem: false,
	specs: [],
	types: [],
};

export const getProcessData = createAsyncThunk(
	"process/getProcessData",
	async (data = {}, thunkAPI) => {
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
		return response.status === 200
			? response.data
			: thunkAPI.rejectWithValue("create item error");
	}
);

export const getSpecs = createAsyncThunk(
	"process/getSpecs",
	async (data = {}, thunkAPI) => {
		const response = await services.getSpecsService();
		return response ? response : thunkAPI.rejectWithValue("get specs error");
	}
);

export const getTypes = createAsyncThunk(
	"process/getTypes",
	async (data = {}, thunkAPI) => {
		const response = await services.getTypesService();
		return response ? response : thunkAPI.rejectWithValue("get types error");
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
		builder.addCase(getSpecs.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getSpecs.fulfilled, (state, { payload }) => {
			state.specs = payload.data;
			state.loading = false;
		});
		builder.addCase(getSpecs.rejected, (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		});
		builder.addCase(getTypes.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getTypes.fulfilled, (state, { payload }) => {
			state.types = payload.data;
			state.loading = false;
		});
		builder.addCase(getTypes.rejected, (state, { payload }) => {
			state.error = payload;
			state.loading = false;
		});
	},
});

export const rowsSelect = (state) => state.process.rows.data;
export const isCreatingModalOpenSelect = (state) =>
	state.process.isCreatingItem;
export const specsSelect = (state) => state.process.specs;
export const typesSelect = (state) => state.process.types;
export const loadingSelect = (state) => state.process.loading;

export const { setIsOpen } = processSlice.actions;

export default processSlice.reducer;
