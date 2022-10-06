console.log('Start!')

setTimeout(() => { // waits for xxx micro-seconds
console.log('Timer Done!')
done()
},500) // 0 microseconds 

function done(){
    console.log('Finish!')
}

