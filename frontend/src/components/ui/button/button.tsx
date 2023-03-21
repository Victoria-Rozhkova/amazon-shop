import clsx from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

import { IButton } from './button.types'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={clsx(
				'rounded-xl font-medium shadow px-10 py-2',
				{
					'text-white bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'white'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
