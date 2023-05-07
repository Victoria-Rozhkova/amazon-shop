import { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { AddToCartButtonProps } from './types'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

const AddToCartButton: FC<AddToCartButtonProps> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	const onToggleToCartHandler = () => {
		currentElement
			? removeFromCart({ id: currentElement.id })
			: addToCart({ product, quantity: 1, price: product.price })
	}

	return (
		<div>
			<button onClick={onToggleToCartHandler} className='text-primary'>
				{currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}

export default AddToCartButton
