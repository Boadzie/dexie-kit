<script>
	import { browser } from '$app/environment';
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';

	let title, author, genre, price;

	$: books = liveQuery(() => (browser ? db.books.toArray() : []));

	const addBook = () => {
		return db.books.add({ title, author, genre, price });
	};

	$: handleSubmit = () => {
		if (title && author && genre && price) {
			addBook();
			title = '';
			author = '';
			genre = '';
			price = 0.0;
		} else {
			alert('All fields are required');
		}
	};
</script>

<section class="container text-slate-500 mx-auto px-0 ">
	<h1 class="bg-slate-800 text-white p-2 text-4xl ">Dexie-Kit</h1>
	<div class="mt-6 mx-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
		{#if $books}
			{#each $books as book}
				<div class="bg-slate-100 rounded-sm p-4 flex flex-col gap-x-4 gap-y-2">
					<h1 class="text-2xl ">{book.title}</h1>
					<p class="text-md">{book.author}</p>
					<p class="italic">{book.genre}</p>
					<p class="font-bold text-red-500">
						{book.price.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD'
						})}
					</p>
				</div>
			{/each}
		{/if}
	</div>
	<div class="mx-4 m-6">
		<h1 class="text-4xl my-4">Add a Book</h1>
		<form on:submit|preventDefault={handleSubmit} class="flex flex-wrap gap-3 max-w-lg" action="">
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Title..."
				bind:value={title}
				type="text"
			/>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Author..."
				bind:value={author}
				type="text"
			/>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Genre..."
				bind:value={genre}
				type="text"
			/>
			<input
				class="focus:outline-none p-3 rounded-sm w-full ring-2"
				placeholder="Price..."
				bind:value={price}
				step="0.01"
				type="number"
			/>
			<button type="submit" class="px-4 py-2 bg-slate-700 text-white rounded-sm">Add Book</button>
		</form>
	</div>
</section>
