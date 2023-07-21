'use client'

import { ISearchBarProps } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'

import SearchManufacturer from './SearchManufacturer'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={'/magnifying-glass.svg'}
      alt={'magnifying glass'}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({ setManuFacturer, setModel }: ISearchBarProps) => {
  const [searchModel, setSearchModel] = useState('')
  const [searchManufacturer, setSearchManufacturer] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchManufacturer.trim() === '' && searchModel.trim() === '')
      return alert('Please provide some input')

    setModel(searchModel)
    setManuFacturer(searchManufacturer)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar

// 'use client'
// import Image from 'next/image'
// import { useState } from 'react'
// import { SearchManufacturer } from './'
// import { useRouter } from 'next/navigation'

// const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
//   <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
//     <Image
//       src={'/magnifying-glass.svg'}
//       alt={'magnifying glass'}
//       width={40}
//       height={40}
//       className="object-contain"
//     />
//   </button>
// )

// const SearchBar = () => {
//   const [manufacturer, setManuFacturer] = useState('')
//   const [model, setModel] = useState('')

//   const router = useRouter()

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     if (manufacturer.trim() === '' && model.trim() === '') {
//       return alert('Please provide some input')
//     }

//     updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
//   }

//   const updateSearchParams = (model: string, manufacturer: string) => {
//     // Создайте новый объект URLSearchParams, используя текущие параметры поиска URL.
//     const searchParams = new URLSearchParams(window.location.search)

//     // Обновите или удалите параметр поиска «модель» на основе значения «модель».
//     if (model) {
//       searchParams.set('model', model)
//     } else {
//       searchParams.delete('model')
//     }

//     // Обновите или удалите параметр поиска «производитель» на основе значения «производитель».
//     if (manufacturer) {
//       searchParams.set('manufacturer', manufacturer)
//     } else {
//       searchParams.delete('manufacturer')
//     }
//     // Создайте новый путь с обновленными параметрами поиска.
//     const newPathname = `${window.location.pathname}?${searchParams.toString()}`

//     router.push(newPathname)
//   }

//   return (
//     <form className="searchbar" onSubmit={handleSearch}>
//       <div className="searchbar__item">
//         <SearchManufacturer
//           manufacturer={manufacturer}
//           setManuFacturer={setManuFacturer}
//         />
//         <SearchButton otherClasses="sm:hidden" />
//       </div>
//       <div className="searchbar__item">
//         <Image
//           src="/model-icon.png"
//           width={25}
//           height={25}
//           className="absolute w-[20px] h-[20px] ml-4"
//           alt="car model"
//         />
//         <input
//           type="text"
//           name="model"
//           value={model}
//           onChange={(e) => setModel(e.target.value)}
//           placeholder="Tiguan..."
//           className="searchbar__input"
//         />
//         <SearchButton otherClasses="sm:hidden" />
//       </div>
//       <SearchButton otherClasses="max-sm:hidden" />
//     </form>
//   )
// }

// export default SearchBar
