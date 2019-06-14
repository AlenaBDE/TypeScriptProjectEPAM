import {Category} from "./enums";
import {Book, Logger, Author, Librarian, Magazine} from "./interfaces";
import {UniversityLibrarian, ReferenceItem, Shelf} from "./classes";
import RefBook from "./classes/encyclopedia"
import {logCategorySearch, purge, getBooksByCategory, getBooksByCategoryPromise, logSearchResults} from "./lib/utility-functions"

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//1
//logFirsAvavilable(getAllBooks())

//2
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//3
//const titles = getBookTitlesByCategory(Category.JavaScript);

//4
// let myID: string = createCustomerID('Ann', 10);
// let idGenerator: (string, number) => string;
// idGenerator = (name: string, id: number) => `${name}${id}`;
// idGenerator = createCustomerID;

//5
// createCustomer('anna', 12, 'ujj');
// const titles = getBookTitlesByCategory();
// console.log(titles);

//6-9
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
//
// createCustomer('anna', 12, 'ujj');
//
//
// let myBooks = сheckoutBooks(`Ann`, 1, 2, 4);
//
// const titles = getTitles(false);
// console.log(titles);
//
// const myBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3,
//     pages: 200,
//     markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
// };
//
// printBook(myBook);
// myBook.markDamaged(`missing back cover`);

// const favoriteAuthor: Author = {
//     email: "jjak@lkdk.ru",
//     name:"Anna",
//     numBooksPublished: 2
// };
//
// const favoriteLibrarian: Librarian = {
//     email: "jjak@lkdk.ru",
//     name:"Anna",
//     department : `jdhd`,
//     assistCustomer: (custName: string) => console.log(custName)
// }

// class UniversityLibrarian implements Librarian {
//     name: string;
//     email:string;
//     department:string;
//     assistCustomer(custName: string): void{
//         console.log(`${this.name}`);
//     }
// }

//10
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('go');
//
// //22
// favoriteLibrarian.printLibrarian();

//11
// const ref:ReferenceItem = new ReferenceItem('Anna', 2017);
// ref.printItem();
// ref.publisher = 'goo';


//12,13
// const refBook: Encyclopedia = new Encyclopedia('Title', 2017, 2555896);
// refBook.printItem();
// refBook.printCitation();

//16
// const refBook: RefBook = new RefBook('Title', 2017, 2555896);
// refBook.printItem();
// refBook.printCitation();

//18
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// let result:any[] = purge<Book>(inventory);
// console.log(result);
// result = purge<number>([1,2,3,4]);
// console.log(result);

//19
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);

// const magazines: Array<Magazine> = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// const firstMag: Magazine = magazineShelf.getFirst();
// console.log(firstMag);

//20
// magazineShelf.printTitles();
// const o = magazineShelf.find('Five Points');
// console.log(o);

//23
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistFaculty =() => console.log('Changed 1');
// favoriteLibrarian.teachCommunity =() => console.log('Changed 2');

//24
// const refBook: RefBook = new RefBook('Title', 2017, 2555896);
// refBook.printItem();

//25, 26
// const favoriteLibrarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Vova');

//27
// const refBook: RefBook = new RefBook('Title', 2017, 2555896);
// refBook.copies = 5;
// refBook.copies = -10;

//28
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('Finish');

//29 console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length
//     })
//     .then(count => console.log(count))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete'));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(err => console.log(err))
//     .finally(() => console.log('Complete'));
// console.log('Finish');

//30
console.log('Beginning search...');
logSearchResults(Category.JavaScript)
    .catch(reason => console.log(reason));
console.log('Search submitted...');
