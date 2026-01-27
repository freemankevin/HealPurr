import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';

export default defineConfig({
  integrations: [mdx(), tailwind()],
  output: 'static',
  adapter: vercel(),
  site: 'https://cat.freemankevin.uk',
  base: '',
  devToolbar: {
    enabled: false,
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkGithubBlockquoteAlert],
    rehypePlugins: [rehypeRaw],
  },
});