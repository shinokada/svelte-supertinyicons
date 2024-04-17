import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        onclick?: (() => void) | undefined;
        size?: string | undefined;
        role?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
        withEvents?: boolean | undefined;
        title?: {
            id?: string | undefined;
            title?: string | undefined;
        } | undefined;
        desc?: {
            id?: string | undefined;
            desc?: string | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MacosProps = typeof __propDef.props;
export type MacosEvents = typeof __propDef.events;
export type MacosSlots = typeof __propDef.slots;
export default class Macos extends SvelteComponent<MacosProps, MacosEvents, MacosSlots> {
}
export {};
