<script>
	// Svelte Routing
	import { Router, Route } from 'svelte-routing';
	// Pages
	import Home from './pages/Home.svelte';
	import Login from './pages/Login.svelte';
	import SelectLanguage from './pages/SelectLanguage.svelte';
	import Words from './pages/words/Words.svelte';
	import SingleWord from './pages/words/SingleWord.svelte';
	import Profile from './pages/profile/Profile.svelte';
	import EditProfile from './pages/profile/EditProfile.svelte';
	// Components
	import Topbar from './components/app-wide/Tobar.svelte';
	import Footer from './components/app-wide/Footer.svelte';

	export let url = '';
</script>

<Router {url}>
	<Topbar />
	<div>
		<Route path="auth" component={Login} />
		<Route path="select-language" component={SelectLanguage} />
		<Route path="words" component={Words} />
		<Route path="words/:id" component={SingleWord} />
		<Route path="profile/:id" component={Profile} />
		<Route path="profile/:id/edit" component={EditProfile} />
		<Route path="/"><Home /></Route>
	</div>
</Router>
<Footer />

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
