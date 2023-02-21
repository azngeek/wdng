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
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2">
				<div class="col-span-2 text-gray-800">
					<img src="./1400.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">14:00</h3>
					<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
						{$t('agenda.agenda_1400')}
					</p>
				</div>
			</div>
		</div>

		<!-- 14:30 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2">
				<div class="col-span-2 text-gray-800">
					<img src="./1430.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">14:30</h3>
					<p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
						{$t('agenda.agenda_1430')}
					</p>
				</div>
			</div>
		</div>

		<!-- 15:15 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./1515.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">15:15</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_1515')}
					</p>
				</div>
			</div>
		</div>

		<!-- 17:00 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./1700.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">17:00</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_1700')}
					</p>
				</div>
			</div>
		</div>

		<!-- 17:30 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./1730.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">17:30</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_1730')}
					</p>
				</div>
			</div>
		</div>

		<!-- 18:30 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./1830.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">18:30</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_1830')}
					</p>
				</div>
			</div>
		</div>

		<!-- 22:30 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./2230.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">22:30</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_2230')}
					</p>
				</div>
			</div>
		</div>

		<!-- 03:00 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./0300.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">03:00</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_0300')}
					</p>
				</div>
			</div>
		</div>

		<!-- 03:15 -->
		<div class="mb-8 mt-8 md:flex md:justify-between items-center ">
			<div class="grid grid-cols-12 shadow md:px-6 md:py-2 min-w-full">
				<div class="col-span-2 text-gray-800">
					<img src="./0315.svg" class="w-16 pt-6 pl-2"/>
				</div>
				<div class="col-span-10">
					<h3 class="mb-3 font-bold text-gray-800 text-xl">03:15</h3>
					<p class="text-sm text-gray-900 text-opacity-100">
						{$t('agenda.agenda_0315')}
					</p>
				</div>
			</div>
		</div>

	</div>
</article>
