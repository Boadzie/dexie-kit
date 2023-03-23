import { db } from '$lib/db';
export async function load({ params }) {
	const book = await db.books
		.where({
			id: Number(params.bookId)
		})
		.first();

	// console.log(book);

	return {
		book
	};
}
