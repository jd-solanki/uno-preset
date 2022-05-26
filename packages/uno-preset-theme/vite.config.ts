const path = require('path')
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      formats: ['cjs', 'es'],
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'uno-preset-theme',
      fileName: (format) => `uno-preset-theme.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})