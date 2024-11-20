import { defineConfig } from 'windicss/helpers'
export default defineConfig({
  prefix: 'c-',
  extract: {
    include: [
      process?.argv[2] === 'build'
        ? 'src/components/**/*.{vue,html,jsx,tsx}'
        : 'src/**/*.{vue,html,jsx,tsx}'
    ]
  }
})
