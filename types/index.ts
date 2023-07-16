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
