export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '496f2e00femsh9523a3c6bbda79bp11e33bjsn0a494c08e0a4',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  )

  const result = await response.json()

  return result
}
