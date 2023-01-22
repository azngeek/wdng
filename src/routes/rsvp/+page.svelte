<script>
    // https://developer.typeform.com/embed/modal/
	import { onMount } from 'svelte';
    import { createPopup } from '@typeform/embed'
    import '@typeform/embed/build/css/popup.css'


	onMount(() => {
		const { toggle } = createPopup('BtSly3JE', {
			medium: 'demo-test',
			hidden: { foo: 'foo value', bar: 'bar value' }
		});
		document.getElementById('button').onclick = function () {
			toggle();
		};
	});
</script>

<button id="button">toggle</button>
