import React from "react";
import { TableCell, TableHead, TableRow } from "@material-ui/core";
import { useStylesTableHead } from "./MainTable.styles";

const MainTableHead = () => {
	const classes = useStylesTableHead();

	const headers = [
		"status",
		"id",
		"spec",
		"rev",
		"title",
		"type",
		"priority",
		"package",
		"ball in court",
		"due date",
		"response",
	];
	return (
		<TableHead>
			<TableRow>
				{headers.map((header) => (
					<TableCell className={classes.tableHead} key={header}>
						{header}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default MainTableHead;
