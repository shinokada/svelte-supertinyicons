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
export type BunProps = typeof __propDef.props;
export type BunEvents = typeof __propDef.events;
export type BunSlots = typeof __propDef.slots;
export default class Bun extends SvelteComponent<BunProps, BunEvents, BunSlots> {}
export {};
