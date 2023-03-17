import { NextPage } from 'next'

export type Roles = {
	isUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & Roles

export type ComponentAuthFields = {
	Component: Roles
}
