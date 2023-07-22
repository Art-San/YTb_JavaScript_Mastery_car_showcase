import { MouseEventHandler } from 'react'

export interface ICustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface ISearchManuFacturerProps {
  selected: string
  setSelected: (selected: string) => void
}

export interface ICarsProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export type ICarState = ICarsProps[] & { message?: string }

export interface ISearchBarProps {
  setManuFacturer: (manufacturer: string) => void
  setModel: (model: string) => void
}

export interface IFilterProps {
  manufacturer?: string
  year?: number
  model?: string
  limit?: number
  fuel?: string
}

export interface IHomeProps {
  searchParams: IFilterProps
}

export interface IOptionProps {
  title: string
  value: string
}

export interface ICustomFilterProps<T> {
  options: IOptionProps[]
  setFilter: (selected: T) => void
}

export interface IShowMoreProps {
  pageNumber: number
  isNext: boolean
  setLimit: (limit: number) => void
}
