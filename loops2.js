//let's creat a multiplication table

/*
1   2   3   4   5   6   7   8   9   10
2   4   6   8   10  12  14  16  18  20
.
.
.
10  20  30  40  50  60  70  80  90  100
*/

//Let's first do one row
for(let i = 1; i <= 10; i++){
let row = '';
for(let j = 1; j <= 10; j++){
    row += '  ' + (i * j)
    // row = row + '  ' + (i * j) same as line above
}
console.log(row)
}


// Step 1: loop i 1-10
// Step 2: loop j 1- 10
// Step 3: output i * j
// Step 4: Put each row together 

// for (let i = 1; i <= 10; i++) {
//     let wholeRow = '';
//     for (let j = 1; j <= 10; j++) {
//         wholeRow += '  ' + (i * j)
//     }
//     console.log(wholeRow)
// }