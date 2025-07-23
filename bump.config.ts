import { defineConfig } from 'bumpp'

export default defineConfig({
  all: true,
  execute: 'npx conventional-changelog -p angular -i CHANGELOG.md -s',
})
