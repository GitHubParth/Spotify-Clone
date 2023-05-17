import { React , useEffect } from 'react'

const TopArtists = () => {

	useEffect(() => {
		document.title = "Spotify - Top Artists";
	}, []);

	return (
		<div>TopArtists</div>
	)
}

export default TopArtists