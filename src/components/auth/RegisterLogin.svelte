<script>
	// Imports - Components
	import Input from '../main/inputs/Input.svelte';
	import UrlButton from '../main/buttons/UrlButton.svelte';
	import RecoverPassword from './RecoverPassword.svelte';
	// Imports - Store
	import { showRecover } from '../auth/auth-store';
	// Local variables
	let email = '';
	let password = '';
	let isUser = true;
	// Functions
	function toggleRecover() {
		if (!$showRecover) {
			showRecover.set(true);
		} else {
			showRecover.set(false);
		}
	}

	function toggleUser() {
		return (isUser = !isUser);
	}
</script>

<section class="absolute z-20">
	<RecoverPassword {toggleRecover} />
</section>
<main class="flex flex-col md:items-center h-screen px-5 justify-evenly z-10">
	<h1 class="font-body text-gray text-2xl md:text-3xl font-regular text-center">
		{#if isUser}
			Welcome! Please Login to access the app.
		{:else}
			Please fill the information
		{/if}
	</h1>
	<div class="w-full md:w-1/2">
		<Input icon="at" placeholder="email@email.com" label="E-mail">
			<input
				type="email"
				id="input"
				bind:value={email}
				placeholder="email@email.com"
				class="block border-gray rounded-md bg-gray-light shadow mb-5 h-10 w-full pl-9"
			/>
		</Input>
		<Input icon="lock" label="Password">
			<input
				type="password"
				id="input"
				bind:value={password}
				placeholder="******"
				class="block border-gray rounded-md bg-gray-light shadow mb-5 h-10 w-full pl-9"
			/>
		</Input>
	</div>
	<div class="flex md:flex-col items-center justify-evenly md:h-1/5 w-screen">
		<button
			class="font-body text-gray mr-auto md:mr-0 text-sm visited:text-gray hover:text-purple-light border-none"
			on:click={toggleUser}
		>
			{#if isUser}
				Don't have an account?
			{:else}
				Already have an account?
			{/if}
		</button>
		<div class="mr-auto md:mr-0">
			<UrlButton buttonUrl="/select-language">
				{#if isUser}
					LOGIN
				{:else}
					REGISTER
				{/if}
			</UrlButton>
			{#if isUser}
				<button
					class="font-body mt-2 md:mt-5 text-gray text-sm visited:text-gray hover:text-purple-light border-none"
					on:click={toggleRecover}>Forgot your password?</button
				>
			{/if}
		</div>
	</div>
</main>
