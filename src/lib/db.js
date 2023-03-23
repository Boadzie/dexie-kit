// db.js
import Dexie from 'dexie';
// import { indexedDB, IDBKeyRange } from 'fake-indexeddb';

export const db = new Dexie('bookDB');
db.version(1).stores({
	books: '++id, title, author, genre, price' // Primary key and indexed props
});

const dummyData = [
	{
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		genre: 'Fiction',
		price: 12.99
	},
	{
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		genre: 'Fiction',
		price: 10.99
	},
	{
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		genre: 'Fiction',
		price: 9.99
	},
	{
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		price: 14.99
	},
	{
		title: 'The Lord of the Rings',
		author: 'J.R.R. Tolkien',
		genre: 'Fantasy',
		price: 24.99
	},
	{
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
		genre: 'Thriller',
		price: 7.99
	}
];

db.on('populate', function (transaction) {
	transaction.books.bulkAdd(dummyData);
});

db.open();
