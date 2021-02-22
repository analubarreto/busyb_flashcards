<script>
	import Button from '../components/main/buttons/UrlButton.svelte';
</script>

<main class="flex flex-col px-10 h-screen md:items-center">
	<h1 class="my-16 font-body text-center text-purple font-semibold text-2xl md:text-4xl">
		BusyB Flashes
	</h1>
	<p class="text-gray font-body text-lg md:text-xl">
		Hi! This is a open source flashcard app. The official repositiory is at:
		https://github.com/analubarreto
	</p>
	<br />
	<p class="text-gray font-body text-lg md:text-xl">
		To download it to your device, please click in the download button below.
	</p>
	<br />
	<p class="text-gray font-body text-lg md:text-xl">
		The app is mainly in english, but I do accept help translating it to other languages. Please
		contact me if you want to help:
	</p>
	<br />
	<a
		class="font-body text-lg md:text-2xl decoration-none text-purple-light visited:text-purple-light active:decoration-none hover:text-orange"
		href="https://wa.me/5561991828555"
		rel="noopener"
		target="_blank">https://wa.me/5561991828555</a
	>
	<div class="self-center mt-10">
		<Button buttonUrl="/login">ENTER</Button>
	</div>
</main>