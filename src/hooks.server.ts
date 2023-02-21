import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const counter = event.cookies.get('counter');
	const newCounter = parseInt(counter ?? '0') + 1;
	event.cookies.set('counter', newCounter.toString(), { path: '/' });

	console.log(`Hook Fired: ${counter} - ${newCounter}`);
	return await resolve(event);
};