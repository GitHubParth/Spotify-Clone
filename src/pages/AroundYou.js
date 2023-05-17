import { React , useEffect } from 'react'

const AroundYou = () => {

  	useEffect(() => {
		document.title = "Spotify - Around You";
	}, []);

	return (
		<div>AroundYou</div>
	)
}

export default AroundYou