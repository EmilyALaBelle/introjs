function addUp(userInput) {
    let total = 0
    for (let i = userInput; i > 1; i--) {
        userInput = i;
        userInput = userInput - 1
       
       console.log(total)
    }
    console.log(total)
}
addUp(4)