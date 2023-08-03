# Svelte Supertiny

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsors" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-supertiny" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-supertiny" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-supertiny" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-supertiny" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-supertiny.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

340+ SVG logos for popular brands from <a href="https://github.com/edent/SuperTinyIcons">SuperTinyIcons</a> for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub repo](https://github.com/shinokada/svelte-supertiny/)

## Original source

[edent/SuperTinyIcons](https://github.com/edent/SuperTinyIcons)

## License

[Svelte-Supertiny License](https://github.com/shinokada/svelte-supertiny/LICENSE)

[SuperTinyIcons License](https://github.com/edent/SuperTinyIcons/blob/master/LICENSE)


## Installation

```sh
pnpm i -D svelte-supertiny
```

## Usage

In a svelte file:

```html
<script>
  import { Icon } from 'svelte-supertiny';
</script>

<Icon name="amazon" />
```

## Props

- @prop name;
- @prop width = "512";
- @prop height = "512";
- @prop role = 'img';
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="amazon" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<Icon name="amazon" class="shrink-0 h-20 w-20" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="amazon" class="inline m-1" />
```

Bootstrap examples:

```html
<Icon name="amazon" class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `amazon` has `aria-label="amazon"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="amazon" ariaLabel="big amazon"/>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="amazon" tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<Icon name="amazon" tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="amazon"/>
```

## Using onMount

```html
<script>
  import {Icon} from 'svelte-supertine';
  import { onMount } from 'svelte';
  const props = {
    name: 'amazon',
    size: '50',
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```

## Import all

Use `import {Icon, icons} from 'svelte-supertiny';`.

```html
<script>
  import {Icon, icons} from 'svelte-supertiny';
</script>

{#each Object.keys(icons) as name}
<div class="flex gap-4 items-center text-lg">
  <Icon name={name} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
