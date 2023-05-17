import { React, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css'
import 'swiper/css/free-mode'
import { TopCharts } from '../pages';

const TopChartCard = ({ song, index, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
	<div className='w-full flex items-center hover:bg-[#25353B]/80 transition-all duration-200 py-2 p-4 rounded-lg cursor-pointer mb-2' key={index}>
		<p className='font-bold text-white text-base mr-3'>{index+1}.</p>
		<div className='flex flex-1 justify-between items-center gap-5'>
			<div className='flex items-center'>
				<img src={song?.images.coverart} alt='coverPhoto' className='w-16 h-16 rounded-lg' />
				<div className='flex flex-col items-start ml-3 justify-center'>
					<Link to={`/songs/${song?.key}`} className=' max-w-[180px] truncate text-white font-bold'>
						{song?.title}
					</Link>
					<Link to={`/artists/${song?.artists[0].adamid}`} className='max-w-[160px] truncate text-white text-sm'>
						{song?.subtitle}
					</Link>
				</div>
			</div>
			<PlayPause
				isPlaying={isPlaying}
				activeSong={activeSong}
				song={song}
				handlePause={handlePauseClick}
				handlePlay={handlePlayClick}
			/>
		</div>
	</div>
)

const TopPlay = () => {

	const dispatch = useDispatch()
	const { activeSong, isPlaying } = useSelector((state) => state.player)
	const { data } = useGetTopChartsQuery()
	const divRef = useRef(null)

	useEffect(() => {
		divRef.current.scrollIntoView({ behaviour: "smooth" })
	}, []);
	
	const topPlays = data?.tracks?.slice(0, 5);

	const handlePauseClick = () => {
		dispatch(playPause(true))
	}
	const handlePlayClick = (song, i) => {
		dispatch(setActiveSong({ song, data, i }))
		dispatch(playPause(true))
	}

	return (
		<div ref={divRef} className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[400px] max-w-full flex flex-col'>
			<div className='w-full flex flex-col'>
				<div className='flex justify-between items-center'>
					<h2 className='text-white font-bold text-2xl'>Top Charts</h2>
					<Link to="/top-charts" className='text-gray-300 text-base cursor-pointer'>
						<p>See More</p>
					</Link>
				</div>
				<div className='mt-4 flex flex-col gap-1'>
					{topPlays?.map((song, index) => (
						<TopChartCard song={song} index={index} key={index} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={() => handlePauseClick} handlePlayClick={() => handlePlayClick(song, index)} />
					)) }
				</div>

				<div className='w-full flex flex-col mt-8'>
					<div className='flex justify-between items-center'>
						<h2 className='text-white font-bold text-2xl'>Top artists</h2>
						<Link to="/top-artists" className='text-gray-300 text-base cursor-pointer'>
							<p>See More</p>
						</Link>
					</div>
					<Swiper
						slidesPerView="auto"
						spaceBetween={15}
						freeMode
						centeredSlides
						centeredSlidesBounds
						modules={[FreeMode]}
						className='mt-4'
					>
						{topPlays?.map((song, i) => (
							<SwiperSlide
								key={i}
								style={{ width: '25%', height: 'auto' }}
								className='shadow-lg rounded-full animate-slideright'
							>
								<Link to={`/artists/${song?.artists[0].adamid}`}>
									<img src={song?.images.background} alt='Img' className='rounded-full w-full object-cover' />
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default TopPlay