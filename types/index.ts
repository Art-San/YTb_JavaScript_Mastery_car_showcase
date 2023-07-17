import { MouseEventHandler } from 'react'

export interface ICustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
}

export interface ISearchManufacturerProps {
    manufacturer: string
    setManuFacturer: (manufacturer: string) => void
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
