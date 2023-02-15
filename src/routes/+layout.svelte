<script lang="ts">
	import { onMount } from 'svelte';

	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import { locale, isLoading } from '$lib/i18n';
	import Divider from '$lib/components/Divider.svelte';
	import '@fontsource/bodoni-moda/400-italic.css';

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
		<Divider />
	</div>
{/if}