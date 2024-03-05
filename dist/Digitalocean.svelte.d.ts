import { SvelteComponent } from 'svelte';
declare const __propDef: {
	props: {
		size?: string | undefined;
		role?: string | undefined;
		ariaLabel?: string | undefined;
		class?: string | undefined;
	};
	events: {
		[evt: string]: CustomEvent<any>;
	};
	slots: {};
};
export type DigitaloceanProps = typeof __propDef.props;
export type DigitaloceanEvents = typeof __propDef.events;
export type DigitaloceanSlots = typeof __propDef.slots;
export default class Digitalocean extends SvelteComponent<
	DigitaloceanProps,
	DigitaloceanEvents,
	DigitaloceanSlots
> {}
export {};
