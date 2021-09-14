import { makeStyles } from "@material-ui/core";

export const useStylesMenu = makeStyles({
	tabs: {
		backgroundColor: "white",
		color: "black",
		borderBottom: "solid 1px #d9d9d9",
	},
	tab: {
		textTransform: "capitalize",
		fontSize: 16,
	},
});

export const useStylesTabView = makeStyles((theme) => ({
	tabView: {
		marginBottom: "20px",
		[theme.breakpoints.up("sm")]: {
			display: "flex",
			justifyContent: "space-between",
		},
	},
	button: {
		marginBottom: theme.spacing(2),
	},
}));
