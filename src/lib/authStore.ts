import { writable } from "svelte/store";
import type firebase from "firebase/app";

// https://github.com/CaptainCodeman/sveltekit-example/commits?author=CaptainCodeman
// https://stackoverflow.com/questions/68779637/persisting-user-state-in-sveltekit
// https://www.captaincodeman.com/lazy-loading-firebase-with-sveltekit
const authStore = writable<{
  isLoggedIn: boolean;
  user?: firebase.UserInfo;
  firebaseControlled: boolean;
}>({
  isLoggedIn: false,
  firebaseControlled: false,
});

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
};