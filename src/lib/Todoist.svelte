<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'todoist',
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
  <path d="m0 0H512V512H0" fill="#E44232" /><path
    fill="#fff"
    d="M167.1 240.2l103.6-59.7h.1l106.8-61.6c4.5-2.6 4.7-10.6-.3-13.5l-3.6-2-14.6-8.4a16.6 16.6 0 00-16.2.2L166.6 196.7a22 22 0 01-21.8 0L56 145v44l1 .5c22 12.9 74.5 43.5 87.4 50.8a21.3 21.3 0 0022.7 0zm0 87.8 103.5-59.7.4-.2 106.6-61.4c4.5-2.6 4.7-10.6-.3-13.5l-3.6-2-14.6-8.4a16.6 16.6 0 00-16.2.2L166.6 284.4c-6.8 3.9-15 4-21.8 0L56 232.8v43.9l1 .5c22.1 13 74.5 43.5 87.4 50.8a21.4 21.4 0 0022.7 0zm103.6 28-103.6 59.7c-7.5 4.3-15 4.4-22.7 0A15382 15382 0 0156.9 365l-.9-.6v-43.9l88.8 51.7a22 22 0 0021.8 0l176.3-101.5c6-3.5 12.5-2.3 16.2-.2l14.6 8.4 3.6 2c5 3 4.8 11 .3 13.5z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'todoist'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
