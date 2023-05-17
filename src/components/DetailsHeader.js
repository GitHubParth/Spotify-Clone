import React from 'react'
import { Link } from 'react-router-dom'
import RelatedSongs from './RelatedSongs'

const DetailsHeader = ({ artistId, artistData, songData }) => {
	return (
		<div className='relative flex flex-col w-full'>
			<div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 ' />
			<div className='absolute inset-0 flex items-center'>
				<img src={songData?.images?.coverart} alt='' className='w-28 h-28 border' />
			</div>

			<RelatedSongs />
		</div>
	)
}

export default DetailsHeader