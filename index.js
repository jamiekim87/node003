
// _____________________________________

// Pulling array values

// let numbers = [1, 2, 3, 4, 5]

// let a = numbers[0]
// let b = numbers[1]
// let c = numbers[2]

// console.log(a, b, c)

// _______________________________________

// Destructuing array values 

// let [ ,,, a, b ] = numbers

// console.log(a, b)

// _______________________________________

// Pulling object properties

// let dog = {
//     name: 'Beef',
//     age: 2,
//     breed: 'Chihuahua'
// }

// // let name = dog.name
// // let age = dog.age
// // let breed = dog.breed

// // console.log(name, age, breed)

// _________________________________

// Destructuring object properties

// let { name, age, breed } = dog

// console.log(name, age, breed)

// __________________________________

// Array filtered with for loop 

// let numbers = [1, 2, 3, 4, 5]

// let odds = []

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         odds.push(numbers[i])
//     }
// }

// console.log(odds)

// __________________________________________

// let numbers = [1, 2, 3, 4, 5]

// let odds = numbers.filter(number => {
//     return number % 2 === 0 
// })

// console.log(odds)

// ________________________________________



// Map with For loop

// let letters = ['a', 'b', 'c', 'd', 'e']

// let letterObjs = []

// for (let i = 0; i < letters.length; i++) {
//     letterObjs.push({
//         letter: letters[i]
//     })
// }

// console.log(letters[i])

// __________________________________________

// Map with array iterator

// let letterObjs = letters.map((letter) => {
//     return { letter }
// })

// console.log(letterObjs)

// __________________________________________

// Array loop 

// letters.forEach((letter, i) => {
//     console.log(i, letter)
// })

