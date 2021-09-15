import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStylesBackdrop } from "./BackdropLoader.styles";

export default function BackdropLoader({ isOpen }) {
	const classes = useStylesBackdrop();

	return (
		<Backdrop className={classes.backdrop} open={isOpen}>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
}
