<script>
	import '../app.postcss';
</script>

<div class="flex bg-slate-800 text-white p-3 gap-4 justify-between items-center">
	<a href="/" class="px-2 text-3xl ">Dexie-Kit</a>
	<a class="text-2xl px-2  rounded-sm hover:text-green-500" href="#addBook">Add Book</a>
</div>
<main><slot /></main>

<style>
	:global(html) {
		font-family: 'Titillium Web', sans-serif;
	}
</style>
