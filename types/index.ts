import { MouseEventHandler } from 'react'

export interface ICustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
}

export interface ISearchManufacturerProps {
    manufacturer: string
    setManufacturer: (manufacturer: string) => void
}
