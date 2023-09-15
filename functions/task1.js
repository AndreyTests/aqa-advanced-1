// function declaration
function calculateArea ( width, height ) {
    return width * height;
}
console.log ( calculateArea (5 , 10 ));


// function expressions
const calculateArea2 = function ( width, height ){
    return width * height;
}
console.log ( calculateArea2 ( 5,10 ));


// arrow function
const calculateArea3 = ( width, height ) => {
    return width * height;
}
console.log ( calculateArea3 ( 5,10));