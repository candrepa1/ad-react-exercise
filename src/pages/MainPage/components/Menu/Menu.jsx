import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs } from "@material-ui/core";
import { useStylesMenu } from "./Menu.styles";
import TabView from "./TabView";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={2}>{children}</Box>}
		</div>
	);
};

const Menu = () => {
	const classes = useStylesMenu();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => setValue(newValue);

	return (
		<>
			<AppBar position="static" elevation={0}>
				<Tabs
					className={classes.tabs}
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
					indicatorColor="primary"
				>
					<Tab label="Items" className={classes.tab} />
					<Tab label="Packages" className={classes.tab} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<TabView tabName="item" />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<TabView tabName="package" />
			</TabPanel>
		</>
	);
};

export default Menu;
