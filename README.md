# Vite node_modules dep reload query

I am developing a project that uses vite for lib build. I followed [this](https://vitejs.dev/guide/build.html#library-mode) guide and I want to reload my node_modules when I change a dependency. However, whenever I make changes to lib it doesn't get reflected in vue app. I have to restart the server to take effect.

## Steps

1. Clone the repo
2. run `pnpm install --shamefully-hoist`
3. run `cd packages/uno-preset-theme && pnpm run dev`
4. run `cd packages/vue-project && pnpm run dev` _(You will see button)_
5. Open `packages/uno-preset-theme/src/main.ts` and remove padding utility
6. Check frontend