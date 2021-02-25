import { writable } from 'svelte/store';
import { navigate } from 'svelte-routing';

const auth = writable({
  showRecover: false,
  error: '',
  logedIn: false,
  isUser: true
})

export const authStore = {
  subscribe: auth.subscribe,
  set: auth.set,
  update: auth.update,
  toggleItem: (item, value) => {
    auth.update(authObj => {
      return {...authObj, [item]:value}
    })
  }

  // Export functions

}

// Helper functions