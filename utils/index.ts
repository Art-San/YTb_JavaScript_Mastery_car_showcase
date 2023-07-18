import { ICarsProps } from '@/types'
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '9de32da2eemshf3e549597ac9ae2p15d9b0jsn1e6791b653dd',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
        { headers: headers }
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
    const url = new URL('https://cdn.imagin.studio/getimage')
    const { make, model, year } = car

    // url.searchParams.append(
    //     'customer',
    //     process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
    // )
    url.searchParams.append('customer', '')
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}
