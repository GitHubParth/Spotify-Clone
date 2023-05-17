import { React, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import { links } from '../assets/constants'

const NavLinks = ({ handleClick }) => {
	return (
		<div className='mt-5'>
			{links.map((item) => (
				<NavLink 
					key={item.name}
					to={item.to}
					className="flex flex-row justify-start items-center my-6 text-md font-medium text-gray-300 hover:text-primary"
					onClick={() => handleClick && handleClick() }>
						<item.icon className="w-8 h-8 pr-3" />
						{item.name}
				</NavLink>
			))}
		</div>
	)
}

const Sidebar = () => {

	const [mobileMenu, setMobileMenu] = useState(false)

	return (
		<>
			<div className='md:flex hidden flex-col w-[240px] pt-8 py-10 px-4 bg-[rgb(37,53,59)]'>
				<Link to="/">
					<img src="/images/logo-text.png" alt='Logo' className='w-full pr-2' />
				</Link>
				<NavLinks />
			</div>

			<div className='absolute md:hidden flex top-6 right-3'>
				{mobileMenu ? "" : 
					<HiOutlineMenu className='w-8 h-8 text-white mr-2 z-50' onClick={() => { setMobileMenu(true) }} /> }
			</div>

			<div className={`absolute z-50 top-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-lg flex flex-col smooth-transition items-center justify-start pt-10 px-8 h-screen w-full ${mobileMenu ? 'right-0' : 'right-full'}`}>
				<img src="/images/logo-text.png" alt='Logo' className='w-[250px] pr-2' />
				<NavLinks />
				<RiCloseLine className='w-8 h-8 text-white mr-2 z-50 absolute top-12 right-5' onClick={() => { setMobileMenu(false) }} />
			</div>
		</>
	)
}

export default Sidebar