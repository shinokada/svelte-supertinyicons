<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'itch_io',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M256 272s33 31 39 42l-22-1v19H239V313l-22 1c6-11 39-42 39-42Zm-70-36c-6 0-29 0-45 46l-18 63c-13 46 4 47 26 47 31-1 49-24 48-47a371 371 0 00117 0c0 23 18 46 49 47 22 0 39-1 26-47l-18-63c-16-46-39-46-45-46-12 0-23 0-37 15l-33-2-33 2c-14-15-25-15-37-15Zm31-40a43 43 0 0038 22h1 1a43 43 0 0038-22 43 43 0 0068 9l7-9 7 9c8 8 19 13 31 13l4-1 2 46v18c0 36 4 118-16 138-30 7-86 10-142 10s-112-3-142-10C94 399 98 317 98 281V263l2-46 4 1c12 0 23-5 31-13l7-9a43 43 0 0068 9l7-9ZM118 95a3511 3511 0 01276 0c16 10 49 47 49 56v16c0 21-19 38-36 38-21 0-38-17-38-37 0 20-17 37-38 37-20 0-36-17-36-37 0 20-18 37-39 37s-39-17-39-37c0 20-16 37-36 37-21 0-38-17-38-37 0 20-17 37-38 37-17 0-36-17-36-38V151c0-9 33-46 49-56Z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'itch_io'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
