const numberList = [1, 10, 14, 2, 4, 5, 43, 34];

const newArray = numberList.concat();

console.log("InitialArray:", numberList);

newArray.sort((a, b) => a - b);

console.log("SortedArray:", newArray);
