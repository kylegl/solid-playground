import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'
import devtools from 'solid-devtools/vite'

// TODO: look into getting unocss-preset-shadcn to work with kobalte. currently it uses radix which is similar to kobalte. might just need to swap
// some var names

// uhh whats this? https://github.com/hngngn/shadcn-solid

export default defineConfig({
  vite: {
    plugins: [
      UnoCSS(),
      devtools({ autoname: true }),
    ],
  },
})
