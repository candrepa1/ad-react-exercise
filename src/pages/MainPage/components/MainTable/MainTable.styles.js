import { makeStyles } from "@material-ui/core";

export const useStylesTableHead = makeStyles({
	tableHead: {
		fontWeight: "bolder",
		textTransform: "capitalize",
	},
});

export const useStylesTableBody = makeStyles({
	tableBody: {
		textTransform: "capitalize",
	},
});
