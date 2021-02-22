<script>
	export let icon = ''
	export let color = ''
	export let action = '';
</script>

<main>
	<button on:click={action} class="border-none text-2xl"
		><i class={`fab fa-${icon} mt-3 md:mt-3 ml-3 text-${color}`} />
	</button>
</main>