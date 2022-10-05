const person = {
    name: 'Emily',
    age: 19,
    address: "123 street rd",
}

// console.log("Person is called: ",person.name)
// console.log("Person is called: ", person["name"])

// console.log(`My name is ${person.name} and I'm this old: ${person.age}`)


// const name = person.name
// const age = person.age

const { name, age } = person

console.log(`My name is ${name} and 

I'm this old: ${age}`)