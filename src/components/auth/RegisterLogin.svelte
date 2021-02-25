<script>
	// Imports - Components
	import Input from '../main/inputs/Input.svelte';
	import UrlButton from '../main/buttons/UrlButton.svelte';
	import RecoverPassword from './RecoverPassword.svelte';
	// Imports - Store
	import { authStore } from '../auth/auth-store';
	// Local variables
	let email = '';
	let password = '';
	let isUser = $authStore.isUser;

	$: console.log($authStore.showRecover);
</script>

<section class="absolute z-20">
	<RecoverPassword />
</section>
<main class="flex flex-col md:items-center h-screen px-5 justify-evenly z-10">
	<h1 class="font-body text-gray text-2xl md:text-3xl font-regular text-center">
		{#if $authStore.isUser}
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
		{#if $authStore.isUser}
			<button
				class="font-body text-gray mr-auto md:mr-0 text-sm visited:text-gray hover:text-purple-light border-none"
				on:click={() => authStore.toggleItem('isUser', false)}
			>
				Don't have an account?
			</button>
		{:else}
			<button
				class="font-body text-gray mr-auto md:mr-0 text-sm visited:text-gray hover:text-purple-light border-none"
				on:click={() => authStore.toggleItem('isUser', true)}
			>
				Already have an account?
			</button>
		{/if}
		<div class="mr-auto md:mr-0">
			<UrlButton buttonUrl="/select-language">
				{#if $authStore.isUser}
					LOGIN
				{:else}
					REGISTER
				{/if}
			</UrlButton>
			{#if $authStore.isUser}
				<button
					class="font-body mt-2 md:mt-5 text-gray text-sm visited:text-gray hover:text-purple-light border-none"
					on:click={() => authStore.toggleItem('showRecover', true)}
					>Forgot your password?</button
				>
			{/if}
		</div>
	</div>
</main>
