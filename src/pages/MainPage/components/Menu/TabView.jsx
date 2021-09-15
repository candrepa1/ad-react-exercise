import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
	filterProcessData,
	getProcessData,
	setIsOpen,
} from "../../MainPage.slice";
import { useStylesTabView } from "./Menu.styles";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MainTable from "../MainTable/MainTable";

const TabView = () => {
	const dispatch = useDispatch();
	const classes = useStylesTabView();
	const [inputFilter, setInputFilter] = useState("");

	const handleInputFilterChange = (e) => setInputFilter(e.target.value);

	const openCreateItemModal = () => dispatch(setIsOpen(true));

	const filterByTitle = (e) => {
		e.preventDefault();
		inputFilter
			? dispatch(filterProcessData(inputFilter.toLowerCase()))
			: dispatch(getProcessData());
	};

	return (
		<>
			<div className={classes.tabView}>
				<Button
					color="primary"
					className={classes.button}
					onClick={openCreateItemModal}
					variant="contained"
				>
					<AddIcon />
					Create item
				</Button>
				<form onSubmit={filterByTitle}>
					<TextField
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						onChange={handleInputFilterChange}
						placeholder="Search by title"
						size="small"
						value={inputFilter}
						variant="outlined"
					/>
				</form>
			</div>
			<MainTable />
		</>
	);
};

export default TabView;
