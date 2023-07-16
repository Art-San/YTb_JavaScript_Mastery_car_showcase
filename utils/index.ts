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
