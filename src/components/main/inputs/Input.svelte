<script>
	export let icon = '';
	export let value = '';
	export let placeholder = '';
	export let label = '';
	export let helperText = '';
</script>

<main>
	<label for="input" class="mb-2 font-body text-gray text-lg">{label}</label>
	<span class="md:text-lg">
		<i class={`fas fa-${icon} absolute mt-3 md:mt-3 ml-3 text-gray`} />
	</span>
	<slot>
		<input
			type="text"
			id="input"
			bind:value
			{placeholder}
			class="block border-gray rounded-md bg-gray-light mb-5 h-10 md:h-14 w-full pl-9"
		/>
		<small>{helperText}</small>
	</slot>
	<small class="text-2xs ml-auto">{helperText}</small>
</main>
