import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import HeaderCart from './cart/header-cart'
import HeaderProfile from './profile/header-profile'

const Header: FC = () => {
	return (
		<header
			className='bg-secondary w-full p-6 grid'
			style={{ gridTemplateColumns: '1fr 3fr 1.2 fr' }}
		>
			<Link href='/'>
				<Image
					priority
					width={180}
					height={37}
					src='/images/logo.png'
					alt='amazon'
				/>
			</Link>
			{/* <Search /> */}
			<div className='flex items-center justify-end gap-10'>
				<Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
