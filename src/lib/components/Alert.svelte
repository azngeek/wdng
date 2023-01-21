<script lang="ts">
	import authStore from '$lib/authStore';
    let userLoggedIn:boolean = false;
    console.log(authStore);
	authStore.subscribe(({ isLoggedIn, user }) => {
		if (isLoggedIn) {
            console.log(user);
            userLoggedIn = true;
		}
	});
</script>

{#if userLoggedIn}
<h1>Huhu, User ist eingeloggt</h1>
{/if}
