import {Category} from "../enums";
import {Book, LibMgrCallback} from "../interfaces";

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

export function getAllBooks(): Array<any> {
    let books: Array<Book> = [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.CSS},
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.HTML},
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.TypeScript
        }
    ];
    return books;
}


export function logFirstAvailable(books: Array<any>): void {
    const number: number = books.length;
    let name: string = '';
    for (const book of books) {
        if (book.available) {
            name = book.title;
            break;
        }
    }
    console.log(`name, ${name}`);
}


export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    let titles: string[] = [];

    for (const book of books) {
        if ((<any>book).category === category) {
            titles.push((<any>book).title);
        }
    }
    return titles;
}

export function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title))
}


export function getBookByID(id: number): Book | undefined {
    const books = getAllBooks();
    return books.find(item => item.id === id);
}

export function createCustomerID(name: string, id: number): string {
    return `${name}${id}`
}


export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer Name: ${name}`);
    if (age) {
        console.log(`Customer Name: ${age}`);
    }

    if (city) {
        console.log(`Customer Name: ${city}`);
    }
}


export function сheckoutBooks(customer: string, ...bookIDs: number[]) {
    const titles: string[] = [];
    for (const id of bookIDs) {
        const book = getBookByID(id);
        if (book.available) {
            titles.push(book.title)
        }
    }
    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(bookProperty: any): string[] {
    const books = getAllBooks();
    const titles: string[] = [];
    if (typeof bookProperty === 'string') {
        return books.filter(item => item.author === bookProperty).map(item => item.title)
    }
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback) {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No Books');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000)
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(err.message)
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No Books');
            }
        }, 2000)
    });

    return p;
}

export async function logSearchResults(category: Category) {
    let foundBooks = await getBooksByCategoryPromise(category);
    console.log(foundBooks);
}


