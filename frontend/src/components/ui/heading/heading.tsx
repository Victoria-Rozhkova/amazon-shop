import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { IHeading } from './heading.types'

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return <h1 className={clsx('font-semibold text-3xl', className)}>{children}</h1>
}

export default Heading
