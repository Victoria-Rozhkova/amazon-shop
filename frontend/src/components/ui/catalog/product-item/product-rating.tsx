import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { RatingProps } from './types'
import { ReviewService } from '@/services/review.service'

const ProductRating: FC<RatingProps> = ({ product }) => {
	const { data: rating } = useQuery(
		['get product rating', product.id],
		() => ReviewService.getAverageByProduct(product.id),
		{
			select: ({ data }) => data
		}
	)

	return (
		<div>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{ display: 'inline-block' }}
				size={34}
				allowFraction
				transition
			/>
			<span>({product.reviews.length} reviews)</span>
		</div>
	)
}

export default ProductRating
