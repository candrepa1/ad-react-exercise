import React from "react";
import { useStylesMain } from "./Mainpage.styles";
import Menu from "./components/Menu/Menu";
import CreateItemModal from "./components/CreateItemModal/CreateItemModal";
import BackdropLoader from "./components/BackdropLoader/BackdropLoader";
import { useSelector } from "react-redux";
import { loadingSelect } from "./MainPage.slice";

const MainPage = () => {
	const classes = useStylesMain();
	const loading = useSelector(loadingSelect);

	return (
		<>
			<BackdropLoader isOpen={loading} />
			<main className={classes.main}>
				<h1 className={classes.title}>Submittals</h1>
				<Menu />
				<CreateItemModal />
			</main>
		</>
	);
};

export default MainPage;
