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
export type OpenstreetmapProps = typeof __propDef.props;
export type OpenstreetmapEvents = typeof __propDef.events;
export type OpenstreetmapSlots = typeof __propDef.slots;
export default class Openstreetmap extends SvelteComponent<OpenstreetmapProps, OpenstreetmapEvents, OpenstreetmapSlots> {
}
export {};
