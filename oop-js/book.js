export class Book {
    constructor(title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        if (typeof newTitle === "string") {
            this._title = newTitle;
        } else {
            console.error("Book title must be a string");
        }
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === "string") {
            this._author = newAuthor;
        } else {
            console.error("Name of author must be a string");
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === "number" && newYear > 0) {
            this._year = newYear;
        } else {
            console.error("Published year must be a number and greater then 0 ");
        }
    }
    printInfo(){
        console.log(`The book is called ${this.title} was written by ${this.author} in ${this.year}`);
    }
    static findOldestBook(books)  {
        if (!Array.isArray(books) || books.length === 0) {
            console.error("There is no books for comparing");
            return null;
        }

        let oldestBook = books[0];

        for (const item of books) {
            if (item.year < oldestBook.year) {
                oldestBook = item;
            }
        }
        return oldestBook;
    }

}
