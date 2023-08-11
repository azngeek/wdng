<script lang="ts">
	import { t, locale } from '$lib/i18n';
	import { onMount } from 'svelte';

	const isToday = (desiredDateTime: Date) => {
		// Get today's date
        const currentDateTime = new Date();
        console.log(currentDateTime);
		
		// Compare the components of the dateToCheck with today's date
		if (currentDateTime > desiredDateTime) {
            return true;
        }
        return false;
	};

	let showPrank = false;

	onMount(() => {

        const desiredDateTime = new Date('2023-08-12T18:00:00'); // Year-Month-DayTHours:Minutes:Seconds

		if (isToday(desiredDateTime)) {
			showPrank = true;
		}
	})

</script>

<article class="prose max-w-screen-lg mt-8">
	<h2>FAQ</h2>

	<h3><a id="1" class="no-underline">1)</a> {$t('faq.q1')}</h3>
	<p>{$t('faq.a1')}</p>

	<h3><a id="2" class="no-underline">2)</a> {$t('faq.q2')}</h3>
	<p>{$t('faq.a2')}</p>
	<div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
		<img class="md:w-5/5 mx-auto" src="/image6.jpg" alt="wasmeier_path" />
		<div class="md:w-4/5 mx-auto text-right text-xs mt-0">
			<span />
		</div>
	</div>

	<h3><a id="3" class="no-underline">3)</a> {$t('faq.q3')}</h3>
	<p>{@html $t('faq.a3')}</p>

	<h3><a id="4" class="no-underline">4)</a> {$t('faq.q4')}</h3>
	<p>{$t('faq.a4')}</p>

	<h3><a id="5" class="no-underline">5)</a> {$t('faq.q5')}</h3>
	<p>{$t('faq.a5')}</p>

	<h3><a id="6" class="no-underline">6)</a> {$t('faq.q6')}</h3>
	<p>{$t('faq.a6')}</p>

	<h3><a id="7" class="no-underline">7)</a> {$t('faq.q7')}</h3>
	<p>{$t('faq.a7')}</p>

	<h3><a id="8" class="no-underline">8)</a> {$t('faq.q8')}</h3>
	<p>{@html $t('faq.a8')} <br /><a href="/best_man_maid">{$t('menu_best_man_maid_of_honor')}</a></p>

	<h3><a id="9" class="no-underline">9)</a> {$t('faq.q9')}</h3>
	<p>{$t('faq.a9')}</p>

	{#if showPrank}
	<h3>10) Sebis Secrets!</h3>
	<a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">🚨 Do not click! 🚨</a>
	{/if}
</article>
