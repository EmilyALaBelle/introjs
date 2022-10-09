function farToCel(tempF) {
    let celcius = (5 / 9 * (tempF - 32))
    console.log(`${tempF}°F is ${celcius.toFixed(2)}°C`)
}
farToCel(100)

console.log('-----------------------------------------------')

function ozToPt(ounces) {
    let pint = ounces * 0.0625
    return pint
}
let ounces = 16
const pint = ozToPt(ounces)
console.log(`${ounces}fl oz is ${pint}pt`)

console.log('-----------------------------------------------')

let studentArr = [{
    firstName: 'Adi',
    lastName: 'Fischer',
},
{
    firstName: 'Emily',
    lastName: 'LaBelle',
},
{
    firstName: 'Cari',
    lastName: 'Licor',
},
{
    firstName: 'Fanessa',
    lastName: 'Hilaire',
},]
function studentsLastNameFinder(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        const student = studentArr[i]
        console.log(student.lastName)
    }

}
studentsLastNameFinder(studentArr)

console.log('--------------------------------------------')

let groceryList = ['Yogurt', 'Protein Bar', 'Fruit', 'Candy']

function findGrocery(groceryList, num) {
    if(num > groceryList.length){
        console.log('Choose a number between 1 and', groceryList.length)
    }
   console.log(groceryList[num-1])
    }
findGrocery(groceryList, 2)

console.log('--------------------------------------------')

function wordTimesNumber(word, num){
    for(let i = 0; i < num; i++){
        console.log(word)
    }
}
wordTimesNumber('cow', 2)