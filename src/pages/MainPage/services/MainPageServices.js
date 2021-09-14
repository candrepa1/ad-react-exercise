import axios from "axios";

const endpoint = "https://ad-react-exercise.free.beeceptor.com/process";

const getProcessDataService = async () => {
	try {
		const getProcessResponse = await axios.get(`${endpoint}`);
		return getProcessResponse.data;
	} catch (error) {
		return error;
	}
};

const filterProcessDataService = async (filter) => {
	try {
		const filterProcessResponse = await axios.get(`${endpoint}?${filter}`);
		return filterProcessResponse.data;
	} catch (error) {
		return error;
	}
};

const createItemService = async (item) => {
	try {
		const createItemResponse = await axios.post(`${endpoint}/create`, item);
		return createItemResponse.data;
	} catch (error) {
		return error;
	}
};

export const services = {
	getProcessDataService,
	filterProcessDataService,
	createItemService,
};
