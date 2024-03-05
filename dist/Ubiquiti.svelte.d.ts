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
export type UbiquitiProps = typeof __propDef.props;
export type UbiquitiEvents = typeof __propDef.events;
export type UbiquitiSlots = typeof __propDef.slots;
export default class Ubiquiti extends SvelteComponent<
	UbiquitiProps,
	UbiquitiEvents,
	UbiquitiSlots
> {}
export {};
