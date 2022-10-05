// const fruits = ['Bananas', 'Berry', 'Apple', 'Mango', 'kiwi',];
// //                  0        1         2        3        4
// // console.log('My fruits are:', fruits)
// // console.log('The first Fruit is:', fruits[0])
// // console.log('The first Fruit is:', fruits[1])

// //Return the fruit at position X from the array
// function getFruit(index) {
//     return fruits[index];
// }

// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(0))
// console.log(getFruit(1))
// console.log(getFruit(2))
// console.log(getFruit(3))

// let playersNumbers = [12,22,42,55,11,36]

// console.log(playersNumbers[0] + playersNumbers[2])

let students = [
    {
        name: "bob",
        age: "24"
    },
    {
        name: "Jennifer",
        age: "32"
    },
    {
        name: "Lily",
        age: "55"
    },
];

// const firstStudent = students[0]

// console.log(firstStudent.name)
// console.log(students[1])


const { name, age } = students[0]
//console.log("First student's name is: ", name)
//console.log(`First student's name is: ${name} and they are ${age} years old.`)

const sentence = "Hello Boca Code"
//console.log(sentence.length)
const arrayOfLetters = sentence.split("")
//console.log(arrayOfLetters)
const arrayOfWords = sentence.split(" ")
let fruits = ['Bananas', 'Berry', 'Apple', 'Mango', 'Guanabana',];
 console.log(fruits)
// console.log(arrayOfWords)
// console.log(`There are ${arrayOfWords.length} words`)

// fruits.push("Grapes")
// console.log(fruits)
// const oldFruit = fruits.pop()//removes from the end
// console.log(oldFruit)
// console.log(fruits)

// const oldFruit2 = fruits.shift()//removes from the front (first, or leftcs)
// console.log(oldFruit2)
// console.log(fruits)

// fruits.unshift("Kiwi")
// fruits.unshift("fig")
// console.log(fruits)

 //fruits = ["tomatos",...fruits,"dragon fruit"] // Spread Operator allows add to add at the ends
 //console.log(fruits)

//console.log(fruits.indexOf("Mango"))

console.log(`my fruits are ${fruits.join(", ")}`)
