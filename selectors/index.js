// Select the first <h2> element:
const practiceTitle1 = document.getElementById('title-practice');
const practiceTitle2 = document.querySelector('h2');
const practiceTitle3 = document.querySelector('#title-practice');
const practiceTitle4 = document.querySelector('.practice');
console.log(practiceTitle1.textContent, 'first found by ID');
console.log(practiceTitle2.textContent, 'second found by HTML attribute');
console.log(practiceTitle3.textContent, 'third found by ID');
console.log(practiceTitle4.textContent, 'forth found by class');

// Select all list items under the <ul> element with the id "fruits"
const fruitsList = document.querySelector(`#fruits`);
const fruitsList2 = document.querySelector(`ul`);
console.log(fruitsList.textContent, 'Fruits');
console.log(fruitsList2.textContent, 'Fruits2');


// Select the second <span> element with the class "color" under the <div> with the id "colors"
const colorList = document.querySelector('span:nth-child(2)');
console.log(colorList.textContent, 'Color');


// Select the cell with age of the student named "Alice"
const name = (document.querySelector("#students > tbody > tr:nth-child(3) > td:nth-child(2)"));
console.log(name.textContent, 'Years');
