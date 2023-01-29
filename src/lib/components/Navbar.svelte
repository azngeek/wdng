<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, signOut } from '$lib/Firebase';
	import authStore from '$lib/authStore';
	import { onMount } from 'svelte';
	import { createPopup } from '@typeform/embed';
	import '@typeform/embed/build/css/popup.css';

	let popup;
	onMount(() => {
		popup = createPopup('BtSly3JE', {
			medium: 'demo-test',
			hidden: { foo: 'foo value', bar: 'bar value' }
		});
	});

	async function rsvp() {
		await toggleMenu();
		popup.toggle();
	}

	let userLoggedIn: boolean = false;
	console.log(authStore);
	authStore.subscribe(({ isLoggedIn, user }) => {
		if (isLoggedIn) {
			console.log(user);
			userLoggedIn = true;
		}
	});

	async function redirectToLogin() {
		await goto('/login');
	}

	function logout() {
		alert('logout');
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	}

	let visibility = false;
	async function toggleMenu() {
		visibility = !visibility;
	}

	async function goTo(location: string) {
		await goto('/' + location);
		toggleMenu();
	}
	/*

    import * as typeformEmbed from '@typeform/embed';
    import '@typeform/embed/build/css/popup.css'

    let { toggle } = typeformEmbed.createPopup('BtSly3JE', {
			medium: 'demo-test',
			hidden: { foo: 'foo value', bar: 'bar value' }
		});

    async function rsvp() 
    {
        await toggleMenu();
		toggle();	
    }*/
</script>

<div class="md:mt-6 sticky top-0 bg-white  ">
	<div class="hidden md:flex flex-row-reverse h-6">
		<select name="cars" id="cars">
			<option value="de">DE</option>
			<option value="fr">FR</option>
			<option value="en">EN</option>
		</select>
	</div>
	<div class="divide-y divide-dotted">
		<div class="text-center text-2xl lg:text-3xl h-12 flex">
			<div class="flex-auto text-left md:text-center font-serif p-2">Amandine & Sebastian</div>
			<div class="md:hidden text-right flex-auto mr-6 py-1">
				<button on:click={toggleMenu}>☰</button>
			</div>
		</div>
		<div class="md:mt-6">
			<ul class="hidden md:flex justify-center h-12 font-serif">
				<li class="flex-initial w-32 h-12 text-center pt-4">
                    <a href="/location">Date & Location</a>
                </li>
				<li class="flex-initial w-32 h-12 text-center pt-4">Flights & Hotels</li>
				<li class="flex-initial w-32 h-12 text-center pt-4">Visit Bavaria</li>
				<li class="flex-initial w-32 h-12 text-center pt-4">
					<a href="#" on:click={rsvp} class="text-green-400 font-bold">RSVP</a>
				</li>
				<li class="flex-initial w-32 h-12 text-center pt-4">Questions</li>
				<li class="flex-initial w-32 h-12 text-center pt-4">
					<a href="/agenda">Timeline</a>
                </li>
				<li class="flex-initial w-32 h-12 text-center pt-4">
					<a href="/party">Wedding Party</a>
				</li>
			</ul>
		</div>
	</div>
</div>

{#if visibility}
	<div
		class="md:hidden fixed top-0 bg-green-200 text-black z-10 overflow-auto text-2xl h-full w-full font-serif"
	>
		<div class="md:hidden text-right flex-auto text-white mr-6 p-2">
			<button value="b" class="text-white" on:click={toggleMenu}>X</button>
		</div>
		<div class="container mx-auto content-center pt-20 py-3 px-4">
			<div class="text-center mt-2">
				<button on:click={() => goTo('location')}>Wedding Party</button>
			</div>
            <div class="text-center mt-2">
				<button on:click={() => goTo('location')}>Location (done)</button>
			</div>
			<div class="text-center mt-2">Flights & Hotel</div>
			<div class="text-center mt-2">Visit Bavaria</div>
			<div class="text-center mt-2"><button on:click={rsvp}>RSVP (done)</button></div>
			<div class="text-center mt-2">Questions</div>
			<div class="text-center mt-2">
                <button on:click={() => goTo('agenda')}>Timeline (done)</button>
            </div>
		</div>
	</div>
{/if}

<style>
	.hideMenuNav {
		display: none;
	}
	.showMenuNav {
		display: block;
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		background: white;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
