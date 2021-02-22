<script>
  import { Link } from 'svelte-routing';
	export let buttonUrl = '';
</script>

<main>
	<Link
		class="flex justify-center items-center bg-yellow text-gray font-body visited:text-gray hover:text-white text-md md:text-lg w-32 h-8 rounded-md md:w-40 md:h-12 hover:bg-orange hover:decoration-none"
		to={buttonUrl}><slot /></Link
	>
</main>