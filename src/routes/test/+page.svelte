<script>
	import {
		ImagePlaceholder,
		Skeleton,
		TextPlaceholder,
		SpeedDial,
		SpeedDialButton,
		Blockquote,
		P,
		Checkbox,
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyCell,
		Label,
		TableBodyRow
	} from 'flowbite-svelte';
</script>



		<P color="text-gray-500 dark:text-gray-400"
			>Does your user know how to exit out of screens? Can they follow your intended user journey
			and buy something from the site you’ve designed? By running a usability test, you’ll be able
			to see how users will interact with your design once it’s live.</P
		>
		<Blockquote border bg class="p-4 my-4">
			<P size="xl" height="relaxed"
				>"Flowbite is just awesome. It contains tons of predesigned components and pages starting
				from login screen to complex dashboard. Perfect choice for your next SaaS application."</P
			>
		</Blockquote>
		<P color="text-gray-500 dark:text-gray-400"
			>First of all you need to understand how Flowbite works. This library is not another
			framework. Rather, it is a set of components based on Tailwind CSS that you can just
			copy-paste from the documentation.</P
		>

		<P class="mb-3" color="text-gray-500 dark:text-gray-400"
			>Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.</P
		>
		<div class="grid grid-cols-1 md:gap-6 md:grid-cols-2">
			<P class="mb-3" color="text-gray-500 dark:text-gray-400"
				>Track work across the enterprise through an open, collaborative platform. Link issues
				across Jira and ingest data from other software development tools, so your IT support and
				operations teams have richer contextual information to rapidly respond to requests,
				incidents, and changes.</P
			>
			<Blockquote class="mb-3" size="xl">
				" Flowbite is just awesome. It contains tons of predesigned components and pages starting
				from login screen to complex dashboard. Perfect choice for your next SaaS application. "
			</Blockquote>
		</div>
		<P class="mb-3" color="text-gray-500 dark:text-gray-400"
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>

		<Skeleton class="mt-16 mb-8" />
		<Skeleton class="mt-16 mb-8" />
		<Skeleton class="mt-16 mb-8" />
		<SpeedDial defaultClass="fixed right-6 bottom-6" }>
			<SpeedDialButton name="Share">
				<svg
					aria-hidden="true"
					class="w-6 h-6 "
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
					/></svg
				>
			</SpeedDialButton>
			<SpeedDialButton name="Print">
				<svg
					aria-hidden="true"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
						clip-rule="evenodd"
					/></svg
				>
			</SpeedDialButton>
			<SpeedDialButton name="Download">
				<svg
					aria-hidden="true"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						clip-rule="evenodd"
						d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
						fill-rule="evenodd"
					/></svg
				>
			</SpeedDialButton>
			<SpeedDialButton name="Copy">
				<svg
					aria-hidden="true"
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" /><path
						d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"
					/></svg
				>
			</SpeedDialButton>
		</SpeedDial>
		<Skeleton class="mt-16 mb-8" />
		<Skeleton class="mt-16 mb-8" />
		<Skeleton class="mt-16 mb-8" />

		<Table>
			<TableHead>
				<TableHeadCell>Left column</TableHeadCell>
				<TableHeadCell>Right column</TableHeadCell>
			</TableHead>
			<TableBody class="divide-y dark:divide-gray-700">
				<TableBodyRow class="divide-x dark:divide-gray-700">
					<TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
					<TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
				</TableBodyRow>
				<TableBodyRow class="divide-x dark:divide-gray-700">
					<TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
					<TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
				</TableBodyRow>
			</TableBody>
		</Table>

		<Label color="red" class="mt-4 flex items-center font-bold italic">
			Label on the other side <Checkbox class="ml-2" />
		</Label>

		<ImagePlaceholder class="my-8" />
		<TextPlaceholder class="my-8" />


