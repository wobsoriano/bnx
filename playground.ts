import { $ } from './src'

$`cat package.json | grep name`

const branch = await $`git branch --show-current`

$`mkdir /tmp/${branch}`
