<script>
	import { db } from '$lib/db';
	import { goto } from '$app/navigation';

	export let data;
	$: ({ book } = data);

	$: handleSubmit = () => {
		try {
			db.books.update(book.id, { ...book });

			goto('/');
		} catch (err) {
			console.log(err);
		}
	};
</script>

<section class="container text-slate-500 mx-auto px-5 ">
	<div class="flex flex-col justify-center items-center min-h-[30rem]">
		<h1 class="text-4xl my-4">Editing {book.title}</h1>
		<form
			on:submit|preventDefault={handleSubmit}
			class="flex flex-wrap gap-3 max-w-lg"
			method="POST"
		>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Title..."
				bind:value={book.title}
				type="text"
			/>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Author..."
				bind:value={book.author}
				type="text"
			/>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Genre..."
				bind:value={book.genre}
				type="text"
			/>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Price..."
				bind:value={book.price}
				step="0.01"
				type="number"
			/>
			<button type="submit" class="px-4 py-2 bg-slate-700 text-white rounded-sm">Update Book</button
			>
		</form>
	</div>
</section>
