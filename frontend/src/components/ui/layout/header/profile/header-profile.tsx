import Image from 'next/image'
import { FC } from 'react'

import { useProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	return (
		<div>
			{profile?.avatarPath && (
				<Image
					src={profile?.avatarPath}
					width={43}
					height={43}
					alt='profile'
					className='rounded-full border-pri
       border border-solid animate-opacity'
				/>
			)}
		</div>
	)
}

export default HeaderProfile
