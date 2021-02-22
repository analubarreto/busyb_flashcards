<script>
	import { Link, navigate } from 'svelte-routing';
  // Imports - Components
	import Input from '../components/main/inputs/Input.svelte';
	import ActionButton from '../components/main/buttons/ActionButton.svelte';
	import SocialButton from '../components/main/buttons/SocialButton.svelte';
	// Imports - Store
	import { authStore } from '../components/auth/auth-store';

	// Local variables
	let email = '';
	let password = '';
	let username = '';

	// Functions
	function handleSignUp() {
		authStore.signUp(username, password, email).then(() => {
			navigate('/select-language', { replace: true })
		})
	}
</script>

<main class="flex flex-col h-screen p-5 items-center justify-evenly">
	<h1 class="font-body text-gray text-2xl md:text-3xl font-regular text-center">
		Please fill the information
	</h1>
	<form class="w-full md:w-1/2" on:submit|preventDefault={handleSignUp}>
		<Input icon="user" placeholder="your name" label="Name" bind:value={username} />
		<Input icon="at" placeholder="email@email.com" label="E-mail">
			<input
				type="email"
				id="input"
				bind:value={email}
				placeholder="email@email.com"
				class="block border-gray rounded-md bg-gray-light mb-5 h-10 w-full pl-9"
			/>
		</Input>
		<Input icon="lock" label="Password">
			<input
				type="password"
				id="input"
				bind:value={password}
				placeholder="******"
				class="block bg-gray-light shadow border-gray rounded-md mb-5 h-10 w-full pl-9"
			/>
		</Input>
		<div class="ml-auto self-end">
			<ActionButton type="submit">REGISTER</ActionButton>
			<Link
				class="font-body text-gray mr-auto md:mr-0 text-sm visited:text-gray hover:text-purple-light border-none"
				to="/login">Already have an account?</Link
			>
		</div>
	</form>
	<p>OR</p>
	<div class="flex">
		<SocialButton icon="facebook-square" color="facebook" />
		<SocialButton icon="google" color="google" />
	</div>
</main>