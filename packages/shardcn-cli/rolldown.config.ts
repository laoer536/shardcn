import { defineConfig } from 'rolldown'

export default defineConfig({
  platform: 'node',
  input: 'src/index.ts',
  output: {
    format: 'esm',
    dir: 'dist',
    minify: true,
  },
})
