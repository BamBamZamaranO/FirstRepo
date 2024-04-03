// 1. Generate a new array that has an extra property averageHouseSize
// 2. Generate a new array that only has cities where the temp is above 10 and population is above 200000
// 3 (Extra). Calculate the the average population size

let cities =[
    { name: 'New York', temp: -19, population: 1975740, houses: 77537 },
    { name: 'Los Angeles', temp: 11, population: 5890352, houses: 77930 },
    { name: 'Chicago', temp: 6, population: 2088254, houses: 62881 },
    { name: 'Houston', temp: 36, population: 4016344, houses: 88428 },
    { name: 'Phoenix', temp: -3, population: 9981533, houses: 17343 },
    { name: 'Philadelphia', temp: 13, population: 5741623, houses: 31004 },
    { name: 'San Antonio', temp: -19, population: 4553717, houses: 61805 },
    { name: 'San Diego', temp: 19, population: 9336694, houses: 60143 },
    { name: 'Dallas', temp: -10, population: 3776686, houses: 86034 },
    { name: 'San Jose', temp: -9, population: 9752106, houses: 42577 }
  ]
  
//Exercise 1
  let avrgHouseSize = cities.map((item)=>{
    let obj = {
        name: item.name,
        temp: item.temp,
        population: item.population,
        houses: item.houses,
        averageHouseSize: (item.population / item.houses)
    }
    return obj
  })
 console.log(avrgHouseSize)

 //Exercise 2
let lowTemp = cities.filter((item)=>{
    return item.temp > 10 && item.population > 200000
})
// console.log(lowTemp)