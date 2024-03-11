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

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50
  const mileageFactor = 0.01
  const ageFactor = 0.05

  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate
  return rentalRatePerDay.toFixed(0)
}
