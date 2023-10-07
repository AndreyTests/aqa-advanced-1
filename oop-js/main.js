import {Book} from "./book.js";
import {EBook} from "./ebook.js";

const book1 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki",1997);
book1.printInfo();

const books = [
    {Author : "John", title : "Book A", year : 2000},
    {Author : "Stefan", title : "Book B", year : 2010},
    {Author : "Daniel", title : "Book C", year : 2020}
];

console.log(Book.findOldestBook(books));

const book2 = new EBook("Rich Dad Poor Dad", "Robert Kiyosaki",1997, "pdf");
book2.printInfo();

const eBooks = [
    {Author : "John", title : "Book A", year : 1990, format :"pdf" },
    {Author : "Stefan", title : "Book B", year : 2010,  format :"pdf"},
    {Author : "Daniel", title : "Book C", year : 2020,  format :"pdf"}
];

console.log(EBook.findOldestBook(eBooks));

const book5 = new Book("RDPD", "Robert Kiyosaki",1997);
const userFormat = "pdf";

console.log(EBook.newBookFormat(book5, userFormat));