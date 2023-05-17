import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Error, Loader, Loading, SongCard } from "../components"
import  { genres } from "../assets/constants"

import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const Discover = () => {

	useEffect(() => {
		document.title = "Spotify - Discover";
	}, []);

	const { activeSong, isPlaying } = useSelector((state) => state.player)

	const { data, isFetching, error } = useGetTopChartsQuery()
	const [genreTitle, setGenreTitle] = useState(genres[0].title)

	if(isFetching) return <Loader title="Loading songs..." />
	if(error) return <Error />

  	return (
      	<section className='flex flex-col'>

        	<div className='w-full flex sm:flex-row flex-col items-center sm:justify-between justify-center mt-6 mb-10'>
				<h2 className='text-3xl text-white font-bold'>Discover {genreTitle}</h2>
				<select onChange={(e) => { setGenreTitle(e.target.value) }} className='bg-black/70 px-2 py-2 text-gray-300 rounded-md'>
					{genres.map((genre, index) => <option value={genre.value} key={index}>{genre.title}</option>)}
				</select>
        	</div>

			{/* <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 place-items-center items-center sm:justify-start justify-center gap-8'> */}
			<div className='flex flex-wrap items-center sm:justify-start justify-center gap-8'>
				{data.tracks.map((song, i) => (
					<SongCard key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} i={i} />
				))}
			</div>
      	</section>
  	)
}

export default Discover 