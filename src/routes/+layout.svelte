<script lang="ts">
	import 'carbon-components-svelte/css/white.css';

	import { onMount } from 'svelte';
	import Alert from '$lib/components/Alert.svelte';
	import { auth } from '$lib/Firebase';
	import authStore from '$lib/authStore';

	import { Link } from 'carbon-components-svelte';

	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { Heading, P, Button, Mark, Span, List, Li, Img } from 'flowbite-svelte';

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

<div class="container max-w-screen-lg h-screen mx-auto">

	<Navbar />

 

	<div class="mt-20 px-10 bg-gradient-to-r h-screen">

           <slot />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
	main-font {
		font-family: 'Cormorant Garamond', serif;
	}
</style>
