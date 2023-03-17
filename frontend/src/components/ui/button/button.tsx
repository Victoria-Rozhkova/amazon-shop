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
				'rounded-xl font-medium shadow',
				{
					'text-white bg-primary px-10 py-2': variant === 'orange',
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
