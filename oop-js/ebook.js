import {Book} from "./book.js";
export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }
    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(newFormat) {
        if (typeof newFormat === "string") {
            this._fileFormat = newFormat;
        } else {
            console.error("File format must be a string");
        }
    }
    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this._fileFormat}`);
    }
    static newBookFormat(object, format){
        if (object instanceof Book && typeof format === "string") {
            return new EBook(object.title, object.author, object.year, format);
        } else {
            console.error("Wrong file format");
            return null;
        }

    }

}
