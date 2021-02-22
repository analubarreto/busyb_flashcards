<script>
	// Imports - Componets
	import Input from '../main/inputs/Input.svelte';
	import ActionButton from '../main/buttons/ActionButton.svelte';
	import { loginStore as showRecover } from './auth-store';
	// Props
	export let toggleRecover;
	// Local variables
	let email = '';
</script>

{#if $showRecover}
	<div class="flex flex-col h-screen p-5 md:p-20 justify-evenly absolute z-10 lg:pl-96">
		<p class="font-body text-orange text-2xl text-center">
			Did you forget your password? Don't worry! Confirm your e-mail bellow and we will help
			you.
		</p>
		<Input icon="at" placeholder="email@email.com">
			<input
				type="email"
				id="input"
				bind:value={email}
				placeholder="email@email.com"
				class="block border-none bg-gray-light shadow rounded-md mb-5 h-10 w-full pl-9"
			/>
		</Input>
		<div class="self-end">
			<ActionButton action={toggleRecover}>SEND</ActionButton>
		</div>
	</div>
	<div class="bg-black h-screen w-screen opacity-95" />
{/if}