<script>
	import Divider from "$lib/components/Divider.svelte";
    import {t, locale} from '$lib/i18n';
</script>
<article class="prose max-w-screen-lg mt-8">

	<h2>FAQ</h2>

	<h3>1) {$t('faq.q1')}</h3>
    <p> {$t('faq.a1')} </p>

    <h3>2) {$t('faq.q2')} </h3>
    <p>{$t('faq.a2')}</p>
    <div class="mt-4 mt-8 text-center prose prose-img:rounded-xl max-w-screen-lg">
		<img 
		class="md:w-5/5 mx-auto"
		src="/image6.jpg"
		alt="wasmeier_path"
		/>
		<div class="md:w-4/5 mx-auto text-right text-xs mt-0">
		  <span></span>
		</div>
	</div>
    
    <h3>3) {$t('faq.q3')} </h3>
    <p>{@html $t('faq.a3')}</p>

    <h3>4) {$t('faq.q4')} </h3>
    <p>{$t('faq.a4')}</p>

    <h3>5) {$t('faq.q5')} </h3>
    <p>{$t('faq.a5')}</p>

    <h3>6) {$t('faq.q6')}</h3>
    <p>{$t('faq.a6')}</p>

    <h3>7) {$t('faq.q7')}</h3>
    <p>{$t('faq.a7')}</p>

    <h3>8) {$t('faq.q8')}</h3>
    <p>{$t('faq.a8')}</p>

    <h3>9) {$t('faq.q9')}</h3>
    <p>{$t('faq.a9')}</p>


</article>