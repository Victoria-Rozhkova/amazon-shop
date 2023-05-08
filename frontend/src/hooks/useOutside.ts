import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

import { useAuth } from './useAuth'
import { errorCatch } from '@/api/api.helper'
import { UserService } from '@/services/user.service'
import { IFullUser } from '@/types/user.interface'

type TypeOut = {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = (initialVisible: boolean): TypeOut => {
	const [isShow, setIsShow] = useState(initialVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})
	return { ref, isShow, setIsShow }
}
