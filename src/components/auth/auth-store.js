import { writable } from 'svelte/store';

// Show Recover
const showRecover = writable(false);

export const loginStore = {
  subscribe: showRecover.subscribe,
  set: showRecover.set,
  update: showRecover.update
}