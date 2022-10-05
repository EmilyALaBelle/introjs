// 1. Do somthing / No Parameters

function sayHello() {
console.log('Hello')
}

sayHello()

// 2. Do Somthing / With Parameters

function greetPerson(name) {
    console.log(`Hello ${name}. Welcome!`)
}

greetPerson('Gianna')
greetPerson('Brad')

// 3. Returns Somthing / No Parameters

function addTwoPlusTwo() {
    return 2 + 2
}

console.log(addTwoPlusTwo())

const answer = addTwoPlusTwo()
console.log('Answer: ', answer)


// 4. Returns Somthing / With Parameters

function doubleMyNumber(number) {
    return number * 2
}

console.log(doubleMyNumber(11))

const myNumber = 17

const result = doubleMyNumber(myNumber)

console.log('Result: ', result)