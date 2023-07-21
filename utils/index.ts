import { ICarsProps, IFilterProps } from '@/types'

export async function fetchCars(filters: IFilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters

  // Set the required headers for the API request
  const headers = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY_ASAVA || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers
    }
  )
  const result = await response.json()
  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Базовая стоимость аренды в сутки в долларах
  const mileageFactor = 0.1 // Дополнительная ставка за милю пробега
  const ageFactor = 0.05 // Доплата за год возраста автомобиля

  // Рассчитать дополнительную ставку на основе пробега и возраста
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Рассчитать общую арендную ставку в день
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: ICarsProps, angle?: string) => {
  // const url = new URL('https://cdn.imagin.studio/car-image-api')
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, year, model } = car

  url.searchParams.append(
    'customer',
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
  )
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)
  console.log(`${url}`)
  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  // Получить текущие параметры поиска URL
  const searchParams = new URLSearchParams(window.location.search)

  // Установите указанный параметр поиска в заданное значение
  searchParams.set(type, value)

  // Установите указанный параметр поиска в заданное значение
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}
