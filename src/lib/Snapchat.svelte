<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'snapchat',
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
  <path d="m0 0H512V512H0" fill="#fffc00" /><path
    fill="#fff"
    stroke="#000"
    stroke-width="7"
    d="M203 414c-18-13-32-20-66-14-5 1-14 4-15-5-2-7-2-18-7-19-31-4-42-10-47-16-2-2-3-7 1-8 53-10 78-61 83-71 6-15-4-24-23-30-9-3-24-7-24-17 0-5 5-8 10-10 4-1 8-2 12 0 12 5 23 7 29 2 0-27-7-61 4-89 13-31 45-59 96-59s83 28 96 59c11 28 4 62 4 89 6 5 17 3 29-2 4-2 8-1 12 0 5 2 10 5 10 10 0 10-15 14-24 17-19 6-29 15-23 30 5 10 30 61 83 71 4 1 3 6 1 8-5 6-16 12-47 16-5 1-5 12-7 19-1 9-10 6-15 5-34-6-48 1-66 14a82 82 0 01-53 20c-21 1-38-8-53-20z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'snapchat'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
