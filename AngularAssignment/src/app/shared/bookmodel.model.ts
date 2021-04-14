import { Byte } from "@angular/compiler/src/util";

export class Bookmodel {
    BookId : number = 0;
    BookName : string = "";
    BookAuthor : string = "";
    BookSummary : string = "";
    BookImage : Byte[] = [0];
    BookPrice : number = 0;
}
