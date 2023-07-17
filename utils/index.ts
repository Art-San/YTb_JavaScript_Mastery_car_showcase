export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '9de32da2eemshf3e549597ac9ae2p15d9b0jsn1e6791b653dd',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
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
