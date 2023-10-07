function printWithDelay(text, ms) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(text), ms);
    }).then(function () {
        console.log(text);
    })
}
printWithDelay('Delayed data', 2000);

///////////////////////////////////////////////////////////////

function delayText(text, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(text), ms)
    })
}
delayText('Hello with delay', 2000).then(res=>{
    console.log(res)
})