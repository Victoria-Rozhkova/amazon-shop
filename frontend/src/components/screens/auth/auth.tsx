import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'

import { validEmail } from './validation'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { AuthEnum, IEmailPassword } from '@/store/user/user.interface'
import { Button, Heading, Input } from '@/ui/index'
import { Loader } from '@/ui/loader'
import Meta from '@/ui/meta'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { removeFromStorage } from '@/services/auth/auth.helper'

const Auth: FC = () => {
	const { isLoading } = useAuth()
	const { login, register } = useActions()
	useAuthRedirect()

	const [type, setType] = useState<AuthEnum.login | AuthEnum.register>(
		AuthEnum.login
	)

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	const onSetTypeHandler = () => {
		setType(type === AuthEnum.login ? AuthEnum.register : AuthEnum.login)
	}

	return (
		<Meta title='Auth'>
			<div className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto min-w-[450px]'
				>
					<Heading className='capitalize text-center mb-4'>{type}</Heading>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<Input
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address'
									}
								})}
								placeholder='Email'
								error={errors.email?.message}
							/>
							<Input
								{...formRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Min length should be more 6 symbols'
									}
								})}
								placeholder='Password'
								type='password'
								error={errors.password?.message}
							/>
							<div className='flex items-center justify-between'>
								<Button variant='orange' type='submit'>
									{type === AuthEnum.login ? 'Login' : 'Register'}
								</Button>
								<button
									type='button'
									onClick={onSetTypeHandler}
									className='block opacity-60 mt-3 text-sm capitalize border-b '
								>
									{type === AuthEnum.login ? AuthEnum.register : AuthEnum.login}
								</button>
							</div>
						</>
					)}
				</form>
			</div>
		</Meta>
	)
}

export default Auth
