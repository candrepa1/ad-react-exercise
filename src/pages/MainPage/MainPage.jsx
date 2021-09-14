import React from "react";
import { useStylesMain } from "./Mainpage.styles";
import Menu from "./components/Menu/Menu";
import CreateItemModal from "./components/CreateItemModal/CreateItemModal";

const MainPage = () => {
	const classes = useStylesMain();

	return (
		<main className={classes.main}>
			<h1 className={classes.title}>Submittals</h1>
			<Menu />
			<CreateItemModal />
		</main>
	);
};

export default MainPage;
