function slowThing(callback) {
    console.log('Hi I am slow')
    callback()
}

slowThing(() => {
    console.log('This is CALLBACK!')
})

console.log('---------------')

function doSecond() {
    console.log('Do this after slow thing.')
}

slowThing(doSecond)