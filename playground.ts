import { $ } from './src'

const list = $`ls -l`
const files = list.split("\n").slice(1).map((l) => l.split(/\s+/).at(-1));
console.log(files)
const branch = await $`git branch --show-current`

$`mkdir ${branch}`
