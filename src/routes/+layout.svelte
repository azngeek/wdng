<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import { locale, isLoading, init } from '$lib/i18n';
	import Divider from '$lib/components/Divider.svelte';
	import '@fontsource/bodoni-moda/400-italic.css';

	let isAuthenticated = false;

	onMount(() => {
		// Als Fallback setzen
		let lang = localStorage.getItem('svelte-i18n-locale');
		if (null === lang) {
			localStorage.setItem('svelte-i18n-locale', 'de');
			locale.set('de');
		} else {
			locale.set(lang);
		}
		
		isAuthenticated = localStorage.getItem('authenticated');
		console.log(isAuthenticated);
	});

	let password = "1";

	function checkPassword() {
		if (password == 'CostaRica') {
			localStorage.setItem('authenticated', true);
			isAuthenticated = true;
		}
	}

</script>


{#if !$isLoading}
	<div class="container max-w-screen-lg mx-auto">
		<Navbar />


		<!-- Content -->
		<div class="mt-10 p-4 font-serif max-w-screen-lg">

			{#if !isAuthenticated}

			<div class="text-center">
				<h2>Please enter password</h2>
				<input bind:value={password} on:input={checkPassword} class="shadow appearance-none border rounded mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
			</div>
				  
			{:else}
				<slot />
			{/if}
		</div>

		<!-- Footer -->
		<footer class="p-4 bg-white mt-8 md:flex md:items-center md:justify-between md:p-6">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				Made with ♥ for Amandine & Sebastian
			</span>
			<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="#" class="hover:underline">Questions? Contact us @ +49 173 79 05 873 (Amandine)</a>
				</li>
			</ul>
		</footer>

	</div>
{/if}