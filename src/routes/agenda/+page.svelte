<script lang="ts">
	import Divider from '$lib/components/Divider.svelte';
	import {t, locale} from '$lib/i18n';
</script>

<h2 class="text-2xl mt-4">{$t('agenda.header')}</h2>

<article class="prose max-w-screen-lg mt-8">

	<div class="container mx-auto mt-8">

		<div class="border-2-2 border-opacity-20 border" style="left: 50%" />

		<!-- 14:00 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-green-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-gray-800 text-xl">14:00</h3>
				<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
					👥 {$t('agenda.agenda_1400')}
				</p>
			</div>
		</div>

		<!-- 14:30 -->
		<div class="mb-8 md:flex justify-between flex-row-reverse items-center w-full">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-red-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-black text-xl">14:30</h3>
				<p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
					💍 {$t('agenda.agenda_1430')}
				</p>
			</div>
		</div>

		<!-- 15:15 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-green-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-gray-800 text-xl">15:15</h3>
				<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
					🥂 {$t('agenda.agenda_1515')}
				</p>
			</div>
		</div>

		<!-- 17:00 -->
		<div class="mb-8 md:flex justify-between flex-row-reverse items-center w-full">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-red-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-black text-xl">17:00</h3>
				<p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
					📸 {$t('agenda.agenda_1700')}

				</p>
			</div>
		</div>

		<!-- 17:30 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-green-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-gray-800 text-xl">17:30</h3>
				<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
					🏛️ {$t('agenda.agenda_1730')}
				</p>
			</div>
		</div>

		<!-- 18:30 -->
		<div class="mb-8 md:flex justify-between flex-row-reverse items-center w-full">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-red-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-black text-xl">18:30</h3>
				<p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
					🎉 {$t('agenda.agenda_1830')}

				</p>
			</div>
		</div>


		<!-- 22:30 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-green-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-gray-800 text-xl">22:30</h3>
				<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
					😴 {$t('agenda.agenda_2230')}
				</p>
			</div>
		</div>

		<!-- 03:00 -->
		<div class="mb-8 md:flex justify-between flex-row-reverse items-center w-full">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-red-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-black text-xl">03:00</h3>
				<p class="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
					🌙 {$t('agenda.agenda_0300')}

				</p>
			</div>
		</div>

		<!-- 03:15 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="order-1 md:w-6/12" />
			<div class="order-1 bg-green-100 shadow-xl md:w-6/12 px-6 py-2">
				<h3 class="mb-3 font-bold text-gray-800 text-xl">03:15</h3>
				<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
					👋 {$t('agenda.agenda_0315')}
				</p>
			</div>
		</div>

	</div>
</article>
