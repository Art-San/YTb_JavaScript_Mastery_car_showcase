'use client'
import { ICarsProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'
import CarDetails from './CarDetails'
import CustomButton from './CustomButton'

interface CarCardProps {
    car: ICarsProps
}

const CarCart = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car
    const [isOpen, setIsOpen] = useState(false)
    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className=" flex mt-6 text-[32px] font-extrabold">
                <span className=" self-start text-[14px] font-semibold">$</span>
                {carRent}
                <span className="self-end text-[14px] font-medium">/day</span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={'/hero.png'}
                    alt="car model"
                    fill
                    priority
                    className=" object-contain"
                />
            </div>
            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={'/steering-wheel.svg'}
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p>{transmission === 'a' ? 'Автомат' : 'Механника'}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={'/tire.svg'}
                            width={20}
                            height={20}
                            alt="tire"
                        />
                        <p>{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 ">
                        <Image
                            src={'/gas.svg'}
                            width={20}
                            height={20}
                            alt="gas"
                        />
                        <p>{city_mpg} MPG</p>
                    </div>
                </div>
                <div className="car-card__btn-container">
                    <CustomButton
                        title="View More"
                        containerStyles=" w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-boald"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(!isOpen)}
                    />
                </div>
            </div>
            <CarDetails
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                car={car}
            />
        </div>
    )
}

export default CarCart
