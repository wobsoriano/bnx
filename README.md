# bunx

Simple [zx](https://github.com/google/zx) style shell for Bun/Node.

## Install

```bash
bun add bunx
```

## Usage

```ts
import { $ } from 'bunx'

$`cat package.json | grep name`

const branch = $`git branch --show-current`

$`mkdir /tmp/${branch}`
```

## License

MIT
