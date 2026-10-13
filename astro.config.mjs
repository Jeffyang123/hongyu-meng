// AI生成
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { readFileSync } from 'fs';
import { parse } from 'yaml';

function yamlPlugin() {
  return {
    name: 'vite-plugin-yaml-inline',
    enforce: 'pre',
    load(id) {
      if (id.endsWith('.yml') || id.endsWith('.yaml')) {
        const content = readFileSync(id, 'utf-8');
        const data = parse(content);
        return `export default ${JSON.stringify(data)};`;
      }
    },
  };
}

export default defineConfig({
  site: 'https://jeffyang123.github.io/hongyu-meng',
  base: '/',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    plugins: [yamlPlugin()],
  },
  build: {
    format: 'directory',
  },
});
