<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'uphold',
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
    d="M295 421c5-1 12 2 14 8 1 5-2 11-8 13-15 4-30 6-44 6h-2c-14 0-29-2-44-6-6-2-9-8-7-14 1-5 8-8 14-7 12 4 25 6 37 6h2c12 0 25-2 38-6m98-263c13 36 8 83-12 128-28 60-79 102-124 102h-2c-45 0-96-42-124-102-20-45-25-92-12-127v-1c19-56 74-94 137-94s117 38 137 94m-66-51a126 126 0 00-142 0c23-1 48 8 71 27 23-19 48-28 71-27M275 363c38-17 46-85 17-148-10-20-22-37-36-52-14 15-26 32-36 52-29 63-21 131 17 148a47 47 0 0038 0M152 277c9 19 20 36 33 50-9-34-5-78 15-120 10-22 24-42 40-59-25-19-51-25-71-16-13 6-23 17-28 33-12 31-7 72 11 112m208 0c18-40 23-81 11-112-5-16-15-27-28-33-20-9-46-3-71 16 16 17 30 37 40 59 20 42 24 86 15 120 13-14 24-31 33-50"
    fill="#49cc68"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'uphold'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
