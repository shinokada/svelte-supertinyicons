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
export type DebianProps = typeof __propDef.props;
export type DebianEvents = typeof __propDef.events;
export type DebianSlots = typeof __propDef.slots;
export default class Debian extends SvelteComponent<DebianProps, DebianEvents, DebianSlots> {}
export {};
