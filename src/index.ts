import { spawn } from 'bun-utilities/spawn'

const quote = (cmd: TemplateStringsArray, ...args: Array<string | number>) => {
  return cmd.reduce((acc, cur, i) => {
    return acc + cur + (args[i] || '')
  }, '')
}
const execSync = (c: string) => {
  const cmd = c.split(/\s+/)
  return spawn(cmd[0], cmd.slice(1))
}
const execSyncWrapper = (
  cmd: TemplateStringsArray | string,
  ...args: any[]
) => {
  if (typeof cmd === 'string') {
    return execSync(cmd)
  } else {
    return execSync(quote(cmd, ...args))
  }
}

/** Run a command and return stdout decoded */
export const $o = (
  cmd: TemplateStringsArray | string,
  ...args: Array<string | number>
) => {
  return execSyncWrapper(cmd, ...args).stdout!
}
/** Run a command and return stdout decoded (alias to $o) */
export const $ = $o
/** Run a command and return stderr decoded */
export const $e = (
  cmd: TemplateStringsArray | string,
  ...args: Array<string | number>
) => {
  return execSyncWrapper(cmd, ...args).stderr
}
/** Run a command and return executed status */
export const $s = (
  cmd: TemplateStringsArray | string,
  ...args: Array<string | number>
) => {
  return execSyncWrapper(cmd, ...args).isExecuted
}
/** Run a command and throw an error if it exists with a non-zero code. */
export const $t = (
  cmd: TemplateStringsArray | string,
  ...args: Array<string | number>
) => {
  const result = execSyncWrapper(cmd, ...args)
  if (!result.isExecuted) {
    console.error(execSyncWrapper(cmd, ...args).stderr)
    throw (`'${cmd} ${args}' exited with non-zero code.`)
  }
}
