import React from 'react'
import { Link } from 'react-router-dom'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'
import { useDispatch, useSelector } from 'react-redux'

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {

	const dispatch = useDispatch()
	// const { } = useSelector()
	// const activeSong = "test"

	const handlePauseClick = () => {
		dispatch(playPause(true))
	}
	const handlePlayClick = () => {
		dispatch(setActiveSong({ song, data, i }))
		dispatch(playPause(true))
	}

	return (
		<div className='flex flex-col w-full max-w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
			<div className='relative w-full h-56 group'>{isPlaying}
				<div className={`absolute inset-0 justify-center items-center rounded-md bg-black bg-opacity-50 transition-all duration-300 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
					<PlayPause
						song={song}
						isPlaying={isPlaying}
						activeSong={activeSong}
						handlePause={handlePauseClick}
						handlePlay={handlePlayClick}
					/>
				</div>
				<img src={song.images?.coverart} alt='song' className='rounded-md h-full w-full' />
			</div>
			<div className='mt-4 flex flex-col'>
				<p className='text-lg font-semibold text-white truncate'><Link to={`/songs/${song?.key}`}>{song.title}</Link></p>
				<p className='text-sm text-white/70 truncate'> <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>{song.subtitle}</Link></p>
			</div>
		</div>
	)
}

export default SongCard