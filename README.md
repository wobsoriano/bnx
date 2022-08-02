# bunx

Simple [zx](https://github.com/google/zx) style shell for Bun/Node.

## Install

```ts
import { $ } from 'bunx'

$`cat package.json | grep name`

const branch = await $`git branch --show-current`

$`mkdir /tmp/${branch}`
```

## License

MIT
