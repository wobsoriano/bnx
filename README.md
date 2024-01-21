# 🐚 bnx

A simple [zx](https://github.com/google/zx) inspired shell for Bun.

> [!IMPORTANT]  
> Starting with Bun v1.0.24, you no longer need this package as you can use the built-in [Bun Shell](https://bun.sh/blog/the-bun-shell).

## Install

```bash
bun add bnx
```

## Usage

```ts
import { $ } from 'bnx'

const list = await $`ls -l`

const files = list.split('\n').slice(1).map((l) => l.split(/\s+/).at(-1))
console.log(files)

const branch = await $`git branch --show-current`

await $`mkdir /tmp/${branch}`
```

## License

MIT
