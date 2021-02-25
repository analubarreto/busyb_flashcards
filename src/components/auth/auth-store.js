import { writable } from 'svelte/store';
import { navigate } from 'svelte-routing';

export const showRecover = writable(false);
export const error = writable('');
export const logedIn = writable(false);

// Helper functions
// Export functions