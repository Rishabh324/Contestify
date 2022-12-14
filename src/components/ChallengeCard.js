import * as React from "react";
import { Typography, CardMedia, CardContent, Card, Box } from "@mui/material";

// For browser apis
var browser = require("webextension-polyfill");

export default function ContestCard() {
	return (
		<Box
			sx={{
				position: "relative",
				overflow: "visible",
				":hover .bin": {
					display: "block",
				},
			}}
		>
			<Card
				sx={{
					display: "flex",
					border: 1,
					borderRadius: 2,
					borderColor: "grey.500",
					marginBottom: 1.5,
					marginRight: 1.5,
					marginLeft: 1.5,
					padding: 1,
					":hover": {
						":hover": {
							borderColor: "#3CC5F3",
							borderWidth: 1.5,
						},
					},
				}}
				onClick={() => {
					window.open("https://practice.geeksforgeeks.org/problems/add-binary-strings3805/1")

				}}
			>
				<CardMedia
					component="img"
					sx={{
						width: 70,
						height: 70,
						borderRadius: 2,
						alignSelf: "center",
						marginLeft: 1,
					}}
					image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
					alt="GFG"
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						padding: "8px",
						width: "100%",
					}}
				>
					<CardContent sx={{ flex: "1 0 auto", padding: 0 }}>
						<Typography
							component="div"
							color="text.primary"
							sx={{ fontSize: 14 }}
							textAlign="center"
							fontWeight="600"
							paddingBottom="8px"
						>
							Daily Challenge
						</Typography>
						<Typography
							component="div"
							color="text.primary"
							sx={{ fontSize: 12 }}
							textAlign="center"
							justifyContent="center"
							fontWeight="525"
						>
							Add Binary Strings
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</Box>
	);
}

// ************************************************* Helper Functions **************************************************

// const mapping = {
// 	HackerEarth: {
// 		logo: "https://yt3.ggpht.com/ytc/AAUvwngkLcuAWLtda6tQBsFi3tU9rnSSwsrK1Si7eYtx0A=s176-c-k-c0x00ffffff-no-rj",
// 		color: "#323754",
// 	},
// 	AtCoder: {
// 		logo: "https://avatars.githubusercontent.com/u/7151918?s=200&v=4",
// 		color: "#222222",
// 	},
// 	CodeChef: {
// 		logo: "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",
// 		color: "#D0C3AD",
// 	},
// 	LeetCode: {
// 		logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
// 		color: "#FFA20E",
// 	},
// 	"Kick Start": {
// 		logo: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
// 		color: "#34A853",
// 	},
// 	CodeForces: {
// 		logo: "https://i.pinimg.com/736x/b4/6e/54/b46e546a3ee4d410f961e81d4a8cae0f.jpg",
// 		color: "#3B5998",
// 	},
// 	TopCoder: {
// 		logo: "https://images.ctfassets.net/b5f1djy59z3a/3MB1wM9Xuwca88AswIUwsK/dad472153bcb5f75ea1f3a193f25eee2/Topcoder_Logo_200px.png",
// 		color: "#F69322",
// 	},
// 	HackerRank: {
// 		logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
// 		color: "#1BA94C",
// 	},
// };
