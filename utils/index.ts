const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '496f2e00femsh9523a3c6bbda79bp11e33bjsn0a494c08e0a4',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
}

try {
  const response = await fetch(url, options)
  const result = await response.text()
  console.log(result)
} catch (error) {
  console.error(error)
}
