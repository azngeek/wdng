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

	onMount(() => {});
</script>

<div class="container max-w-screen-lg mx-auto">
	<Navbar />
    <!-- bg-red-200-->
	<div class="mt-10 p-4 font-serif max-w-screen-lg">
        <slot />
	</div>
</div>