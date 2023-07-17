'use client'
import { Fragment } from 'react'
import Image from 'next/image'

import { Transition, Dialog } from '@headlessui/react'
import { ICarsProps } from '@/types'

interface ICarDetalisProps {
    isOpen: boolean
    closeModal: () => void
    car: ICarsProps
}

const CarDetails = ({ isOpen, closeModal, car }: ICarDetalisProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className=" relative z-10"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-o"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-o"
                    >
                        <div className=" fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <h1>1:51:14</h1>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails
