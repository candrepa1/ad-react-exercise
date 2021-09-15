import { makeStyles } from "@material-ui/core";

export const useStylesBackdrop = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));
