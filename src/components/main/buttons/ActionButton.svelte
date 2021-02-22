<script>
	export let action = null;
	export let type = 'button';
</script>

<main>
	<button
		class="flex justify-center items-center bg-yellow text-gray font-body visited:text-gray hover:text-white text-md md:text-lg w-32 h-8 rounded-md md:w-40 md:h-12 hover:bg-orange hover:decoration-none border-none"
		on:click={action} {type}><slot /></button
	>
</main>