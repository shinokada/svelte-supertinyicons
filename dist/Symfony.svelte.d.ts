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
export type SymfonyProps = typeof __propDef.props;
export type SymfonyEvents = typeof __propDef.events;
export type SymfonySlots = typeof __propDef.slots;
export default class Symfony extends SvelteComponent<SymfonyProps, SymfonyEvents, SymfonySlots> {}
export {};
