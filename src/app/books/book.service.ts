import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(book: Book): Observable<Book>{
    const err = new Error('Error while adding a book');

    //Creating a mock error for testing
    //return throwError(() => err)
    return of(book);

  }

  removeBook(bookId: String): Observable<Book>{
    const err = new Error('Error while removing a book');
    //Creating a mock error for testing
    return throwError(() => err)
  }

  
}
