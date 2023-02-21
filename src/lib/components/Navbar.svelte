<script lang="ts">


	import { goto } from '$app/navigation';
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

	let visibility = false;
	async function toggleMenu() {
		visibility = !visibility;
	}

	async function goTo(location: string) {
		await goto('/' + location);
		toggleMenu();
	}

	let lang = 'de';

	// https://github.com/kaisermann/svelte-i18n/blob/main/docs/Svelte-Kit.md
	import {t, locale} from '$lib/i18n';


	onMount(() => {
		lang = localStorage.getItem('svelte-i18n-locale')
	})

	const onChangeLanguage = () => {
		localStorage.setItem('svelte-i18n-locale', lang);
		locale.set(lang)
	}

	function changeLang(lang) {
		localStorage.setItem('svelte-i18n-locale', lang);
		locale.set(lang)
	}
</script>

<div class="md:mt-6 sticky md:relative top-0 bg-white">
	<div class="hidden md:flex flex-row-reverse h-6">
		<select bind:value={lang} on:change={onChangeLanguage} name="cars" id="cars">
			<option value="{'de'}">DE</option>
			<option value="{'fr'}">FR</option>
		</select>
	</div>
	<div class="divide-y divide-dotted">
		<div class="text-center text-2xl lg:text-3xl h-12 flex">
			<div class="mx-auto p-2">
				<div class="w-32 h-32 md:w-32 md:h-32"><a href="/"><img 
					class=""
					src="/as.png"
					alt="ss"
					/>
				</a>
				</div>
			</div>
			<div class="md:hidden text-right flex-auto mr-6 py-1">
				<button on:click={toggleMenu}>☰</button>
			</div>
		</div>
		<div class="md:mt-6 pl-4">
			<ul class="hidden md:flex justify-center h-12 nice-font">
				<li class="flex w-40 h-12 text-center pt-4">
                    <a href="/location">{$t('menu_date_location')}</a>
                </li>
				<li class="flex w-40 h-12 text-center pt-4">
					<a href="/travel">{$t('menu_travel_hotels')}</a>
				</li>
				<li class="flex-initial w-40 h-12 text-center pt-4">
					<a href="/bavaria">{$t('menu_visit_bavaria')}</a>
				</li>
				<li class="flex-initial w-40 h-12 text-center pt-4">
					<a href="#" on:click={rsvp} class="font-bold">RSVP</a>
				</li>
				<li class="flex-initial w-40 h-12 text-center pt-4">
					<a href="/faq">{$t('menu_faq')}</a>
				</li>
				<li class="flex-initial w-40 h-12 text-center pt-4">
					<a href="/agenda">{$t('menu_agenda')}</a>
                </li>
				<li class="flex-initial w-40 h-12 text-center pt-4">
					<a href="/best_man_maid">{$t('menu_best_man_maid_of_honor')}</a>
				</li>
			</ul>
		</div>
	</div>
</div>

{#if visibility}
	<div
		class="md:hidden fixed top-0 bg-green-200 text-black z-10 overflow-auto text-3xl h-full w-full nice-font"
	>
		<div class="md:hidden text-right flex-auto text-white mr-6 p-2">
			<button value="b" class="text-white" on:click={toggleMenu}>X</button>
		</div>
		<div class="container mx-auto content-center pt-20 py-3 px-4">

			<div class="text-center mt-8">
				<button on:click={() => changeLang('de')}>🇩🇪</button>
				<button on:click={() => changeLang('fr')}>🇫🇷</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={() => goTo('location')}>{$t('menu_date_location')}</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={() => goTo('travel')}>{$t('menu_travel_hotels')}</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={() => goTo('bavaria')}>{$t('menu_visit_bavaria')}</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={rsvp}>RSVP</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={() => goTo('faq')}>{$t('menu_faq')}</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={() => goTo('agenda')}>{$t('menu_agenda')}</button>
			</div>

			<div class="text-center mt-8">
				<button on:click={() => goTo('best_man_maid')}>{$t('menu_best_man_maid_of_honor')}</button>
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
