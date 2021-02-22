import App from './App.svelte';
// Amplify
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

const app = new App({
	target: document.body,
});

export default app;