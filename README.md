# bnx

[zx](https://github.com/google/zx) inspired shell for Bun/Node.

## Install

```bash
bun add bunx # npm install bnx
```

## Usage

```ts
import { $ } from 'bnx'

const list = $`ls -l`

const files = list.split('\n').slice(1).map((l) => l.split(/\s+/).at(-1))
console.log(files)

const branch = $`git branch --show-current`

$`mkdir /tmp/${branch}`
```

## License

MIT
