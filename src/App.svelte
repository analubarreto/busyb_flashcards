<script>
	// Svelte Routing
	import { Router, Route } from 'svelte-routing';
	// Pages
	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
	import Register from './pages/Register.svelte';
	import SelectLanguage from './pages/SelectLanguage.svelte';
	// Components
	import Topbar from './components/app-wide/Tobar.svelte';
	import Footer from './components/app-wide/Footer.svelte';

	export let url = '';
</script>

<Router {url}>
	<Topbar />
	<div>
		<Route path="login" component={Login} />
		<Route path="register" component={Register} />
		<Route path="select-language" component={SelectLanguage} />
		<Route path="/"><Home /></Route>
	</div>
</Router>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
<Footer />