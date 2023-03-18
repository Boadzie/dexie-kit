<script>
	import { browser } from '$app/environment';
	import { db } from '$lib/db';
	import { liveQuery } from 'dexie';

	$: books = liveQuery(() => (browser ? db.books.toArray() : []));
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
</section>
