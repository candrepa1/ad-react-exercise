import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { filterProcessData, setIsOpen } from "../../MainPage.slice";
import { useStylesTabView } from "./Menu.styles";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MainTable from "../MainTable/MainTable";

const TabView = ({ tabName }) => {
	const dispatch = useDispatch();
	const classes = useStylesTabView();
	const [inputFilter, setInputFilter] = useState("");

	const handleInputFilterChange = (e) => setInputFilter(e.target.value);

	const openCreateItemModal = () => dispatch(setIsOpen(true));

	const filterByTitle = (e) => {
		e.preventDefault();
		dispatch(filterProcessData(inputFilter));
	};

	return (
		<>
			<div className={classes.tabView}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={openCreateItemModal}
				>
					<AddIcon />
					Create {tabName}
				</Button>
				<form onSubmit={filterByTitle}>
					<TextField
						variant="outlined"
						placeholder="Search by title"
						size="small"
						value={inputFilter}
						onChange={handleInputFilterChange}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</form>
			</div>
			<MainTable />
		</>
	);
};

export default TabView;
