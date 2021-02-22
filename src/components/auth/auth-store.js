import { writable } from 'svelte/store';
import { Auth } from 'aws-amplify';

// Show Recover
const showRecover = writable(false);

export const loginStore = {
  subscribe: showRecover.subscribe,
  set: showRecover.set,
  update: showRecover.update
}

// Auth
const auth = writable(null);

export const authStore = {
  subscribe: auth.subscribe,
  set: auth.set,
  update: auth.update,
  logout() {
    auth.set(null);
  },
  async signUp(username, password, email) {
    return Auth.signUp(username, password, email)
      .then(data => void auth.set(data));
  }
}