'use client'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { ICustomFilterProps } from '@/types'
import { updateSearchParams } from '@/utils'

const CustomFilter = ({ title, options }: ICustomFilterProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState(options[0])

  // обновить параметры поиска URL и перейти к новому URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase())

    router.push(newPathName)
  }
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e) // Обновить выбранный параметр в состоянии
          handleUpdateParams(e) // Обновите параметры поиска URL и перейдите к новому URL.
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className={'custom-filter__btn'}>
            <span className=" block truncate">{selected.title}</span>
            <Image
              src={'/chevron-up-down.svg'}
              width={20}
              height={20}
              className=" ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          {/* Переход для отображения опций */}
          <Transition
            as={Fragment} // сгруппировать несколько элементов без введения дополнительного узла DOM, т.е., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {/* Сопоставьте параметры и отобразите их как параметры списка */}
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
