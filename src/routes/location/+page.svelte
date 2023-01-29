<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

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
</script>

<h1 class="text-xl"> // Date & Location</h1>

<p class="text-2xl italic font-semibold text-center text-gray-900 mt-8">
	After 5 years of living together, we have finally decided to take the next step! To celebrate the beginning of our new married life together, we invite you to meet us
	on 12 August 2023 in Schliersee at the Markus Wasmeier Freilichtmuseum starting at 14:00 
</p>

<p class="font-normal mt-8">
	The Markus Wasmeier Freilicht Museum is an open-air museum located in Schliersee, Germany. The
	museum is dedicated to showcasing the traditional culture and lifestyle of the region, as well as
	the history of skiing and winter sports. Visitors can explore the museum's collection of over 50
	historical buildings, including a traditional farm, a sawmill, and a blacksmith's shop. The museum
	also features a variety of exhibits, including a display of vintage ski equipment and a collection
	of traditional folk costumes. In addition, the museum offers a variety of activities, such as
	guided tours, workshops, and special events. The Markus Wasmeier Freilicht Museum is a popular
	destination for visitors interested in the history and culture of the region.
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
