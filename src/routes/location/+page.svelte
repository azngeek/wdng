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

<h1 class="text-l">Location</h1>
<h2 class="text-2xl mt-4">Markus Wasmeier Freilichtmuseum</h2>
<h3 class="text-2xl font-light">August 12, 2023</h3>

<p class="font-normal italic mt-4">
	Model Bavarian village with themed tours, costumed craftsmen & a biergarten with mountain views
</p>

<p class="font-normal mt-4">
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
    <a href="https://www.wasmeier.de/">https://www.wasmeier.de</a>

</p>

<div id="map" class="max-w-screen-lg h-96 mt-4 z-0" />

<style>
</style>
