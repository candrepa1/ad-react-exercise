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
			<AppBar elevation={0} position="static">
				<Tabs
					className={classes.tabs}
					indicatorColor="primary"
					onChange={handleChange}
					value={value}
				>
					<Tab className={classes.tab} label="Items" />
					<Tab className={classes.tab} label="Packages" />
				</Tabs>
			</AppBar>
			<TabPanel index={0} value={value}>
				<TabView />
			</TabPanel>
			<TabPanel index={1} value={value}>
				<p>Packages view</p>
			</TabPanel>
		</>
	);
};

export default Menu;
