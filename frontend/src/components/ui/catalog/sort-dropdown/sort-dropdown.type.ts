import { Dispatch, SetStateAction } from 'react'

import { ProductSortEnum } from '@/services/types/types'

export type SortDropdownProps = {
	currentSort: ProductSortEnum
	setCurrentSort: Dispatch<SetStateAction<ProductSortEnum>>
}
