<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'amazon_s3',
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
  <path d="m0 0H512V512H0" fill="none" /><g fill="#e05243"
    ><path d="m123 131v250l137-33V163" /><path
      fill="#8c3123"
      d="m97 144V368l26 13V131m75-38v82h58v33l-58 7v82l58 7v33h-58v82l58 29 4-98 129 31V131l-129 31-4-98"
    /><path d="m256 448V64l58 29v82h-58v33l58 7v82l-58 7v33h58v82m75-38V131l26 12v225" /></g
  ><path fill="#5e1f18" d="m314 175-58 11-58-11 58-14" /><path
    fill="#f2b0a9"
    d="m314 337-58-11-58 11 58 14"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop ariaLabel = 'amazon_s3'
@prop class: classname
@prop title
@prop desc
@prop ...restProps
-->
