import { makeStyles } from "@material-ui/core";

export const useStylesModal = makeStyles((theme) => ({
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	content: {
		display: "flex",
		flexDirection: "column",
	},
	footer: {
		padding: theme.spacing(2),
	},
	title: {
		fontWeight: "bold",
		marginBottom: theme.spacing(2),
		fontSize: 18,
	},
	textField: {
		marginTop: 20,
		width: "100%",
	},
	subSpecField: {
		width: "100%",
		marginTop: 20,
		[theme.breakpoints.up("sm")]: {
			width: "45%",
		},
	},
}));
