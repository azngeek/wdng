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
	import Divider from '$lib/components/Divider.svelte';

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


<article class="prose max-w-screen-lg mt-8">

	<h2>{@html $t('date_location.title')}</h2>
	
	<p>{$t('date_location.paragraph_1')}</p>
	<p>{$t('date_location.paragraph_2')}</p>

	<div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
		<img 
		class="md:w-5/5 mx-auto"
		src="/image13.png"
		alt="wasmeier_path"
		/>
		<div class="md:w-4/5 mx-auto text-right text-xs mt-0">
		  <span></span>
		</div>
	</div>

	<h3>Location</h3>

	<p class="mt-4">
		🔗  <a href="https://www.wasmeier.de/">https://www.wasmeier.de</a>
	</p>
	
	<p>
		📌  <a href="https://www.google.com/maps/place/Markus+Wasmeier+Freilichtmuseum/@47.7063905,11.8763645,17z/data=!4m6!3m5!1s0x479d8a1c761e2605:0xb1f5d76bb5022bc8!8m2!3d47.7063478!4d11.8763233!10e1?hl=en-CH">How to get there</a>
	</p>
	
	<div id="map" class="max-w-screen-lg h-96 mt-4 z-0" />

</article>

