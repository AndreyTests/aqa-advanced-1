// function declaration
function squareSurface ( width, height ) {
    return width * height;
}
console.log ( squareSurface (5 , 10 ));


// function expressions
const squareSurface2 = function ( width, height ){
    return width * height;
}
console.log ( squareSurface2 ( 5,10 ));


// arrow function
const squareSurface3 = ( width, height ) => {
    return width * height;
}
console.log ( squareSurface3 ( 5,10));