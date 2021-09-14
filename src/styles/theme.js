import { createTheme } from "@material-ui/core";

export const theme = createTheme({
	palette: {
		primary: {
			light: "#0099ff",
			main: "#008ae6",
			dark: "#007acc",
			contrastText: "#fff",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
			md: 750,
			lg: 1100,
			xl: 1400,
		},
	},
});
