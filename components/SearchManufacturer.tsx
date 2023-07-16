'use client'
import { ISearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'

const SearchManufacturer = ({
    manufacturer,
    setManufacturer
}: ISearchManufacturerProps) => {
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full"></div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
