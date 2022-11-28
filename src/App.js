import "./App.scss"
import React, { useState } from "react"
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavigationBar from "./components/NavigationBar";
import Contests from "./pages/Contests";
import Subscribe from "./pages/Subscribe";
import ContestProvider from "./context/contestContext";

function App() {
  const theme = createTheme({
		typography: {
			fontFamily: ["Montserrat", "sans-serif"].join(","),
		},
	});

	const [view, setView] = useState(1);

  return (
		<ThemeProvider theme={theme}>
			<ContestProvider>
				<NavigationBar view={view} setView={setView}/>
				{view===1 ? <Contests /> : <Subscribe/>} 
			</ContestProvider>
		</ThemeProvider>
  )
}

export default App
