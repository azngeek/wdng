<script lang="ts">
	import 'carbon-components-svelte/css/white.css';

	import { onMount } from 'svelte';
	import { auth } from '$lib/Firebase';
	import authStore from '$lib/authStore';

	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	// Prüft, ob man eingeloggt ist.
	auth.onAuthStateChanged((user) => {
		authStore.set({
			isLoggedIn: user !== null,
			user,
			firebaseControlled: true
		});
	});

	import {t, locale, isLoading} from '$lib/i18n';
	import Divider from '$lib/components/Divider.svelte';

	onMount(() => {
		locale.set(localStorage.getItem('svelte-i18n-locale'))
	})
	
	
</script>


{#if !$isLoading}
<div class="container max-w-screen-lg mx-auto">
  <Navbar />
  
  <Divider />

  <!-- bg-red-200-->
  <div class="mt-10 p-4 font-serif max-w-screen-lg">
	  <slot />
  </div>

  <!-- Footer -->
  <Divider />

</div>
{/if}
