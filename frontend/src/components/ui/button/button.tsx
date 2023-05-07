import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import { IButton } from './button.types'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'medium',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={clsx(
				'rounded-xl font-medium shadow px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out',
				{
					'text-white bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'white',
					'px-5 py-1 text-sm': size === 'small'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
