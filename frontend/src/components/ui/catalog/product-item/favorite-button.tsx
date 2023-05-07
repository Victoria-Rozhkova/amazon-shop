import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { FavoriteButtonProps } from './types'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user.service'

const FavoriteButton: FC<FavoriteButtonProps> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	if (!profile) return null

	const isExists = profile.favorites?.some(
		favorite => favorite.id === productId
	)

	const onToggleFavoriteHandler = () => {
		mutate()
	}

	return (
		<div>
			<button onClick={onToggleFavoriteHandler} className='text-primary'>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
