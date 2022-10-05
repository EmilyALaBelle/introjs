// let's write a loop!

for (let i = 0; i < 10; i++) {
    console.log(i, 'Hello There!')
}

//let's loop through an array
const mentors = [
    'Peter',
    'Cassandra',
    'Bridgette',
    'Arthur',
    'Sebas',
    'Nerissa',
]

for (let i = 0; i < mentors.length; i++) {
    const firstName = mentors[i]
    console.log(`${firstName} is an awesome mentor!`)
}
