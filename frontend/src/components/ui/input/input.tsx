import clsx from 'clsx'
import { forwardRef } from 'react'

import { IInput } from './input.types'

const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={clsx('mb-4', className)} style={style}>
				<label>
					<span className='mb-2 block'>{placeholder}</span>
					{Icon && <Icon className='mr-1' />}
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
						autoComplete='off'
						className={clsx(
							'px-4 py-2 w-full rounded-lg outline-none border border-gray focus:border-primary transition-all placeholder:text-gray',
							{ 'border-red': !!error }
						)}
					/>
				</label>
				{error && <div className={'text-red mt-1 text-sm'}>{error}</div>}
			</div>
		)
	}
)

Input.displayName = 'Input'

export default Input
