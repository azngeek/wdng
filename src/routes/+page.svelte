<div class="prose max-w-screen-lg h-screen font-serif">
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
		"The ceremony will begin at <span class="font-semibold">2:30 PM</span> and will be followed by
		celebrations until late. We hope to share this joyous occasion with you. Please let us know if
		you will be attending by <span class="font-semibold">February 28th</span> by completing the
		following form: <span class="font-semibold"><a on:click={rsvp}>RSVP</a></span>."
	</p>

	<div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
    <img 
    class="md:w-4/5 mx-auto"
    src="https://images.pexels.com/photos/1483024/pexels-photo-1483024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="ss"
    />
    <div class="md:w-4/5 mx-auto text-right italic mt-0">
      <span>Wonderful sunset at Schliersee 2020</span>
    </div>
	</div>
</div>


<script lang="ts">
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
		popup.toggle();
	}




</script>
