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

<!--
<h1 class="text-xl"> // Date & Location</h1>
-->


<article class="prose max-w-screen-lg mt-8">
	
	<div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
		<img 
		class="md:w-5/5 mx-auto"
		src="/invite_s.jpg"
		alt="invite"
		/>
		<div class="md:w-4/5 mx-auto text-right text-xs mt-0">
		  <span></span>
		</div>
	</div>

	<p>
		{@html $t('date_location.hero_1')}	
		{@html $t('date_location.hero_2')}
	</p>

	<p>{@html $t('date_location.hero_3')} <a on:click={rsvp} class="font-bold"> RSVP </a></p>


	<div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
		<img 
		class="md:w-5/5 mx-auto"
		src="/costa_rica_bridge.jpg"
		alt="costa rica bridge"
		/>
		<div class="md:w-5/5 mx-auto text-right text-xs mt-0">
		  <span>Verlobung/Fiançailles, Costa Rica, 08.01.2022</span>
		</div>
	</div>

	<div class="prose prose-img max-w-screen-lg mt-8">
		<div class="flex flex-row-reverse">
			<div class="w-48 h-48">	<img 
				class=""
				src="/as.png"
				alt="ss"
				/>
				</div>
		</div>
	</div>
	
</article>




