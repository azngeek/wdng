<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
	import {t} from '$lib/i18n';

	onMount(() => {
		let map: google.maps.Map;

		const loader = new Loader({
			apiKey: 'AIzaSyDTmK_YB6FWixG9BczztAcaV6WtNZgVatY',
			version: 'weekly'
		});

		var grayStyles = [
			{
				featureType: 'all',
				stylers: [{ saturation: -20 }, { lightness: 30 }]
			}
		];

		loader.load().then(() => {
			const loc = { lat: 47.7063905, lng: 11.8763645 };

			map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
				center: loc,
				zoom: 12,
				styles: grayStyles
			});

			const image =
				'./wedding-couple.png';
			const beachMarker = new google.maps.Marker({
				position: loc,
				map,
				icon: image
			});
		});
	});

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
		popup.toggle();
	}
</script>

<!--
<h1 class="text-xl"> // Date & Location</h1>
-->

<p class="text-xl md:text-center text-gray-900 mt-8">
	{@html $t('date_location.hero_1')}	
</p>

<p class="text-xl md:text-center text-gray-900 mt-8">	
	{@html $t('date_location.hero_2')}
</p>

<p class="text-xl md:text-center text-gray-900 mt-8">	
	{$t('date_location.hero_3')}
</p>

<p class="font-normal mt-8">
	{$t('date_location.header')}	
</p>

<p class="font-normal mt-8">
	{$t('date_location.paragraph_1')}	
</p>

<p class="font-normal mt-8">
	{$t('date_location.paragraph_2')}	
</p>

<div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
    <img 
    class="md:w-4/5 mx-auto"
    src="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="ss"
    />
    <div class="md:w-4/5 mx-auto text-right text-xs italic mt-0">
      <span>"Wonderful sunset at Schliersee 2020"</span>
    </div>
</div>

<p class="text-xl md:text-center text-gray-900">
	After 5 years of living together, we have finally decided to take the next step! To celebrate
	the beginning of our new married life together, we invite you to meet us on <span
		class="font-semibold">12 August 2023</span
	>
	in <span class="font-semibold">Schliersee</span> at the
	<span class="font-semibold">Markus Wasmeier Freilichtmuseum</span>
	starting at <span class="font-semibold">14:00</span>
</p>

	<p class="text-xl md:text-center text-gray-900 mt-4">
		The ceremony will begin at <span class="font-semibold">2:30 PM</span> and will be followed by
		celebrations until late. We hope to share this joyous occasion with you. Please let us know if
		you will be attending by <span class="font-semibold">February 28th</span> by completing the
		following form: <span class="font-semibold">
      <a on:click={rsvp} class="font-bold text-2xl text-green-400 no-underline">RSVP</a>
    </span>.
	</p>


<p class="mt-4">
    🔗  <a href="https://www.wasmeier.de/">https://www.wasmeier.de</a>
</p>

<p>
    📌  <a href="https://www.google.com/maps/place/Markus+Wasmeier+Freilichtmuseum/@47.7063905,11.8763645,17z/data=!4m6!3m5!1s0x479d8a1c761e2605:0xb1f5d76bb5022bc8!8m2!3d47.7063478!4d11.8763233!10e1?hl=en-CH">How to get there</a>
</p>

<div id="map" class="max-w-screen-lg h-96 mt-4 z-0" />

<style>
</style>
