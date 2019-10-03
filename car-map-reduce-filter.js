
let cars = [{
  make:  'Audi ',
  model: 'Q 7 ',
  year:  2016
},
{
  make: 'Lexus ',
  model: 'GS 430 ',
  year: 2017
},
{
  make: 'Cadilac ',
  model: 'Escalade ',
  year:   2016 
} ];

let hotcar = cars.filter((car) => {
    return car.year < 2018
})

let displayData = cars.map((car) => {
    let result = car
    result.display = car.make + '' + car.model +'' + car.year 
    return result
})
console.log( displayData )