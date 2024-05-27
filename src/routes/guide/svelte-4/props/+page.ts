import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Supertiny v1',
    description: 'How to use props with Svelte Supertiny v1',
    og: {
      title: 'Props - Svelte Supertiny v1',
      description: 'How to use props with Svelte Supertiny v1'
    },
    twitter: {
      title: 'Props - Svelte Supertiny v1',
      description: 'How to use props with Svelte Supertiny v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
