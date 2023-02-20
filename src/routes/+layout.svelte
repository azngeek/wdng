<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import { locale, isLoading, init } from '$lib/i18n';
	import Divider from '$lib/components/Divider.svelte';
	import '@fontsource/bodoni-moda/400-italic.css';


	init({
		fallbackLocale: 'de',
		initialLocale: getLocaleFromNavigator(),
	})

	onMount(() => {
		locale.set(localStorage.getItem('svelte-i18n-locale'));
	});
</script>

{#if !$isLoading}
	<div class="container max-w-screen-lg mx-auto">
		<Navbar />

		<Divider />

		<!-- Content -->
		<div class="mt-10 p-4 font-serif max-w-screen-lg">
			<slot />
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