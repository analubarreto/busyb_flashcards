<script>
	import { Link } from 'svelte-routing';
  // Imports - Components
	import Input from '../components/main/inputs/Input.svelte';
	import UrlButton from '../components/main/buttons/UrlButton.svelte';
	import SocialButton from '../components/main/buttons/SocialButton.svelte';
	// Local variables
	let email = '';
	let password = '';
	let name = '';
</script>

<main class="flex flex-col h-screen p-5 items-center justify-evenly">
	<h1 class="font-body text-gray text-2xl md:text-3xl font-regular text-center">
		Please fill the information
	</h1>
	<div class="w-full md:w-1/2">
		<Input icon="user" placeholder="your name" label="Name" />
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
	</div>
	<div class="ml-auto self-end">
		<UrlButton buttonUrl="/select-language">REGISTER</UrlButton>
		<Link
			class="font-body text-gray mr-auto md:mr-0 text-sm visited:text-gray hover:text-purple-light border-none"
			to="/login">Already have an account?</Link
		>
	</div>
	<p>OR</p>
	<div class="flex">
		<SocialButton icon="facebook-square" color="facebook" />
		<SocialButton icon="google" color="google" />
	</div>
</main>