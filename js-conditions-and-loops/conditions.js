//Using "if else"
const averageGrade = 85;

if (averageGrade <= 59){
    console.log("Незадовільно");

}else if (averageGrade>60&&averageGrade<=70){
    console.log ("Задовільно")

}else if (averageGrade>71&&averageGrade<=80){
    console.log("Добре")

}else if (averageGrade>81&&averageGrade<=90){
    console.log("Дуже добре")

}else if (averageGrade>91&&averageGrade<=100){
    console.log("Відмінно")}

// Using "switch case"
const averageGrade1 = 95;

switch (true) {
    case averageGrade1 <= 59:
        console.log("Незадовільно")
        break
    case averageGrade1>60&&averageGrade1<=70:
        console.log ("Задовільно")
        break
    case averageGrade1>71&&averageGrade1<=80:
        console.log("Добре")
        break
    case averageGrade1>81&&averageGrade1<=90:
        console.log("Дуже добре")
        break
    case averageGrade1>91&&averageGrade1<=100:
        console.log("Відмінно")
        break
    default:
        console.log("noGrades")
}
