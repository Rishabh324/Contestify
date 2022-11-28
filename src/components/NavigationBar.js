import * as React from "react";
import { Toolbar, Box, AppBar, Typography} from "@mui/material";

export default function NavigationBar({view,setView}) {

	console.log(view)
	return (
		<Box sx={{ flexGrow: 1}}>
			<AppBar position="static" sx={{ backgroundColor: "white" }}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, fontWeight: "650", color: "black" }}
					>
						Contestify
					</Typography>
					{view===1? <span onClick={()=>setView(2)}>Subscribe</span>: <span onClick={()=>setView(1)}>Home</span>}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
