import { React , useEffect } from 'react'

const TopCharts = () => {

	useEffect(() => {
		document.title = "Spotify - Top Charts";
	}, []);

	return (
		<div>TopCharts</div>
	)
}

export default TopCharts