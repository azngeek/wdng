<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	// Die Seite leitet direkt auf die Hochzeitslocation weiter
	onMount( () => {
		goto('/location')
	})
</script>