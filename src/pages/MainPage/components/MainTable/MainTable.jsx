import React, { useEffect } from "react";
import { Paper, Table, TableBody, TableContainer } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProcessData, rowsSelect } from "../../MainPage.slice";
import MainTableHead from "./MainTableHead";
import MainTableBody from "./MainTableBody";

const MainTable = () => {
	const dispatch = useDispatch();
	const processRows = useSelector(rowsSelect);

	useEffect(() => {
		dispatch(getProcessData());
	}, [dispatch]);
	return (
		<TableContainer component={Paper}>
			<Table>
				<MainTableHead />
				<TableBody>
					{processRows &&
						processRows.map((row) => <MainTableBody key={row.id} row={row} />)}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MainTable;
