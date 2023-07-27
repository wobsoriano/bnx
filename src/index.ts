import stringArgv from 'string-argv';

const quote = (cmd: TemplateStringsArray, ...args: Array<string | number>) => {
  return cmd.reduce((acc, cur, i) => {
    return acc + cur + (args[i] || '')
  }, '')
}

const exec = (c: string) => {
  return Bun.spawn(stringArgv(c));
};

const execWrapper = (cmd: TemplateStringsArray | string) => {
  if (typeof cmd === 'string') {
    return exec(cmd);
  } else {
    return exec(quote(cmd));
  }
};

export const $ = async (cmd: TemplateStringsArray | string) => {
  const proc = execWrapper(cmd);
  const text = await new Response(proc.stdout).text();
  return text
}
