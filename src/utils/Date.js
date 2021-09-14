export const formatDate = (date: string) => {
	let newDate = new Date(date).toISOString().substring(0, 10);
	return newDate;
};
