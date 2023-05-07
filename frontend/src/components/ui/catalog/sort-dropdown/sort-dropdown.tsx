import { FC } from 'react'

import { SortDropdownProps } from './sort-dropdown.type'
import { ProductSortEnum } from '@/services/types/types'

const SortDropdown: FC<SortDropdownProps> = ({
	currentSort,
	setCurrentSort
}) => {
	return (
		<div className='text-right'>
			<select
				value={currentSort}
				onChange={e => setCurrentSort(e.target.value as any)}
				className='appearance-none py-1 px-2 bg-white outline-gray'
			>
				{(
					Object.keys(ProductSortEnum) as Array<keyof typeof ProductSortEnum>
				).map(key => {
					return (
						<option key={key} value={ProductSortEnum[key]}>
							{ProductSortEnum[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
