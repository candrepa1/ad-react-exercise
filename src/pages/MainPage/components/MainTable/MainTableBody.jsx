import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { useStylesTableBody } from "./MainTable.styles";
import { formatDate } from "../../../../utils/Date";

const MainTableBody = ({ row }) => {
	const classes = useStylesTableBody();
	return (
		<TableRow className={classes.tableBody}>
			<TableCell>{row.status}</TableCell>
			<TableCell>{row.id}</TableCell>
			<TableCell>{row.spec}</TableCell>
			<TableCell>{row.rev}</TableCell>
			<TableCell>{row.title}</TableCell>
			<TableCell>{row.type}</TableCell>
			<TableCell>{row.priority}</TableCell>
			<TableCell>{row.package}</TableCell>
			<TableCell>{row["ball-in-court"]}</TableCell>
			<TableCell>{formatDate(row["due-date"])}</TableCell>
			<TableCell>{row.response}</TableCell>
		</TableRow>
	);
};

export default MainTableBody;
