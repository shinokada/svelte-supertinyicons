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
export type Css3Props = typeof __propDef.props;
export type Css3Events = typeof __propDef.events;
export type Css3Slots = typeof __propDef.slots;
export default class Css3 extends SvelteComponent<Css3Props, Css3Events, Css3Slots> {
}
export {};
