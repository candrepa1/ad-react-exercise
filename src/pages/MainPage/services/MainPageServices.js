import axios from "axios";

const endpoint = "https://re-test.free.beeceptor.com/process";

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
		return createItemResponse;
	} catch (error) {
		return error;
	}
};

const getSpecsService = async () => {
	try {
		const getSpecsResponse = await axios.get(`${endpoint}/specs`);
		return getSpecsResponse.data;
	} catch (error) {
		return error;
	}
};

const getTypesService = async () => {
	try {
		const getTypesResponse = await axios.get(`${endpoint}/types`);
		return getTypesResponse.data;
	} catch (error) {
		return error;
	}
};

export const services = {
	getProcessDataService,
	filterProcessDataService,
	createItemService,
	getSpecsService,
	getTypesService,
};
