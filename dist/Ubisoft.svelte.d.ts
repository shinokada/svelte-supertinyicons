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
export type UbisoftProps = typeof __propDef.props;
export type UbisoftEvents = typeof __propDef.events;
export type UbisoftSlots = typeof __propDef.slots;
export default class Ubisoft extends SvelteComponent<UbisoftProps, UbisoftEvents, UbisoftSlots> {}
export {};
