import React, { useEffect } from "react";
import { useState } from "react";
const ContestContext = React.createContext();

const defaultContest = [
	{
		name: "ProjectEuler+",
		url: "https://hackerrank.com/contests/projecteuler",
		start_time: "2014-07-07T15:38:00.000Z",
		end_time: "2024-07-30T18:30:00.000Z",
		duration: "317616720.0",
		site: "HackerRank",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "BMW SORDI.ai Hackathon 2022",
		url: "https://www.hackerearth.com/challenges/competitive/SORDI-ai-hackathon-2022/",
		start_time: "2022-11-14T12:30:00.000Z",
		end_time: "2022-12-12T13:25:00.000Z",
		duration: "317616720.0",
		site: "HackerEarth",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "45th ICPC World Finals Challenge powered by Huawei - Problem 2",
		url: "https://codeforces.com/contest/1751",
		start_time: "2022-11-17T12:00:00.000Z",
		end_time: "2022-12-01T11:59:00.000Z",
		duration: "1403700.0",
		site: "CodeForces",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "45th ICPC World Finals Challenge powered by Huawei - Problem 1",
		url: "https://codeforces.com/contest/1752",
		start_time: "2022-11-17T12:00:00.000Z",
		end_time: "2022-12-01T11:59:00.000Z",
		duration: "1403700.0",
		site: "CodeForces",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "The EPIC Tournament",
		url: "https://www.hackerearth.com/challenges/competitive/the-epic-tournament/",
		start_time: "2022-11-28T23:00:00.000Z",
		end_time: "2022-12-04T16:00:00.000Z",
		duration: "1059900.0",
		site: "HackerEarth",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Starters 67",
		url: "https://www.codechef.com/START67?itm_campaign=contest_listing",
		start_time: "2022-11-30T14:30:00.000Z",
		end_time: "2022-11-30T17:30:00.000Z",
		duration: "317616720.0",
		site: "CodeChef",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Hack the Journey",
		url: "https://www.hackerearth.com/challenges/competitive/hack-the-journey-coding-india-edition-2022/",
		start_time: "2022-12-01T12:30:00.000Z",
		end_time: "2022-12-04T18:25:00.000Z",
		duration: "971700.0",
		site: "HackerEarth",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Denso Create Programming Contest 2022 Winter(AtCoder Beginner Contest 280)",
		url: "https://atcoder.jp/contests/abc280",
		start_time: "2022-12-03T12:00:00.000Z",
		end_time: "2022-12-03T13:40:00.000Z",
		duration: "1362600.0",
		site: "AtCoder",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Weekly Contest 322",
		url: "https://leetcode.com/contest/weekly-contest-322/",
		start_time: "2022-12-04T02:30:00.000Z",
		end_time: "2022-12-04T04:00:00.000Z",
		duration: "1362600.0",
		site: "LeetCode",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "AtCoder Grand Contest 059",
		url: "https://atcoder.jp/contests/agc059",
		start_time: "2022-12-04T12:00:00.000Z",
		end_time: "2022-12-04T14:30:00.000Z",
		duration: "1362600.0",
		site: "AtCoder",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Starters 68",
		url: "https://www.codechef.com/START68?itm_campaign=contest_listing",
		start_time: "2022-12-07T14:30:00.000Z",
		end_time: "2022-12-07T17:30:00.000Z",
		duration: "7369200.0",
		site: "CodeChef",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "AtCoder Beginner Contest 281",
		url: "https://atcoder.jp/contests/abc281",
		start_time: "2022-12-10T12:00:00.000Z",
		end_time: "2022-12-10T13:40:00.000Z",
		duration: "1362600.0",
		site: "AtCoder",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Biweekly Contest 93",
		url: "https://leetcode.com/contest/biweekly-contest-93/",
		start_time: "2022-12-10T14:30:00.000Z",
		end_time: "2022-12-10T16:00:00.000Z",
		duration: "1148400.0",
		site: "LeetCode",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "December Long 2022",
		url: "https://www.codechef.com/DEC221?itm_campaign=contest_listing",
		start_time: "2022-12-10T14:30:00.000Z",
		end_time: "2022-12-12T09:30:00.000Z",
		duration: "1403700.0",
		site: "CodeChef",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Starters 69",
		url: "https://www.codechef.com/START69?itm_campaign=contest_listing",
		start_time: "2022-12-14T14:30:00.000Z",
		end_time: "2022-12-14T17:30:00.000Z",
		duration: "1403700.0",
		site: "CodeChef",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Codeforces Round (Div. 2)",
		url: "https://codeforces.com/contests",
		start_time: "2022-12-15T14:35:00.000Z",
		end_time: "2022-12-15T17:05:00.000Z",
		duration: "1403700.0",
		site: "CodeForces",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "HHKB Programming Contest 2022 Winter(AtCoder Beginner Contest 282)",
		url: "https://atcoder.jp/contests/abc282",
		start_time: "2022-12-17T12:00:00.000Z",
		end_time: "2022-12-17T13:40:00.000Z",
		duration: "1362600.0",
		site: "AtCoder",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Codeforces Round (Div. 2)",
		url: "https://codeforces.com/contests",
		start_time: "2022-12-19T14:35:00.000Z",
		end_time: "2022-12-19T16:35:00.000Z",
		duration: "1403700.0",
		site: "CodeForces",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Starters 70",
		url: "https://www.codechef.com/START70?itm_campaign=contest_listing",
		start_time: "2022-12-21T14:30:00.000Z",
		end_time: "2022-12-21T17:30:00.000Z",
		duration: "1403700.0",
		site: "CodeChef",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Codeforces Round (Div. 2)",
		url: "https://codeforces.com/contests",
		start_time: "2022-12-27T14:35:00.000Z",
		end_time: "2022-12-27T16:35:00.000Z",
		duration: "1403700.0",
		site: "CodeForces",
		in_24_hours: "No",
		status: "CODING",
	},
	{
		name: "Starters 71",
		url: "https://www.codechef.com/START71?itm_campaign=contest_listing",
		start_time: "2022-12-28T14:30:00.000Z",
		end_time: "2022-12-28T17:30:00.000Z",
		duration: "1403700.0",
		site: "CodeChef",
		in_24_hours: "No",
		status: "CODING",
	},
];

const defaultSubscribtion = {
	// 1: CP 2: Luv baber 0. Unsubscribe
	dailyChallenge: 1,
	HackerEarth: true,
	AtCoder: true,
	CodeChef: true,
	LeetCode: true,
	"Kick Start": false,
	CodeForces: true,
	TopCoder: false,
	HackerRank: true,
};

// Add condition for is subscribed here and we can maintain the list of subscribed sites
const filterContest = (contests, subscribed) => {
	console.log(subscribed);
	const ongoing = [],
		upcoming = [],
		today = [];
	contests.forEach((contest) => {
		const now = new Date();
		const start_time = new Date(contest.start_time);
		const end_time = new Date(contest.end_time);

		if (subscribed[contest.site]) {
			if (now < start_time && start_time - now < 86400000) {
				today.push(contest);
			} else if (now < start_time) {
				upcoming.push(contest);
			} else if (now <= end_time && now >= start_time) {
				ongoing.push(contest);
			}
		}
	});

	return { ongoing, upcoming, today };
};

const ContestProvider = ({ children }) => {
	// const [contests, setContests] = useState(defaultContest);
	const [subscribed, setSubscribed] = useState(defaultSubscribtion);
	const filteredContests = filterContest(defaultContest, subscribed);
	const [ongoing, setOngoing] = useState(filteredContests.ongoing);
	const [upcoming, setUpcoming] = useState(filteredContests.upcoming);
	const [today, setToday] = useState(filteredContests.today);
	// Delete contest if it is in the past
	const deleteContest = (name, type) => {
		if (type === "ongoing") {
			const newContests = ongoing.filter((contest) => contest.name !== name);
			setOngoing(newContests);
		} else if (type === "upcoming") {
			const newContests = upcoming.filter((contest) => contest.name !== name);
			setUpcoming(newContests);
		} else {
			const newContests = today.filter((contest) => contest.name !== name);
			setToday(newContests);
		}
	};

	const changeSubStatus = (site) => {
		console.log("site", site);
		var temp = { ...subscribed };
		temp[site] = !temp[site];
		console.log(temp);
		setSubscribed(temp);
	};
	const changeDailyChallenge = (new_status) => {
		subscribed.dailyChallenge = new_status;
		setSubscribed(subscribed);
	};

	useEffect(()=>{setOngoing(filteredContests.ongoing)} , [subscribed])
	
	useEffect(()=>{setToday(filteredContests.today)} , [subscribed])
	
	useEffect(()=>{setUpcoming(filteredContests.upcoming)} , [subscribed])
	
	return (
		<ContestContext.Provider
			value={{
				ongoing,
				upcoming,
				today,
				subscribed,
				deleteContest,
				changeSubStatus,
				changeDailyChallenge,
			}}
		>
			{children}
		</ContestContext.Provider>
	);
};

export default ContestProvider;
export { ContestContext };
