const quote = (cmd: TemplateStringsArray, ...args: Array<string | number>) => {
  return cmd.reduce((acc, cur, i) => {
    return acc + cur + (args[i] || '')
  }, '')
}

const exec = (c: string) => {
  const cmd = c.split(/\s+/);
  return Bun.spawn([cmd[0], ...cmd.slice(1)]);
};

const execWrapper = (
  cmd: TemplateStringsArray | string,
  ...args: any[]
) => {
  if (typeof cmd === "string") {
    return exec(cmd);
  } else {
    return exec(quote(cmd, ...args));
  }
};

export const $ = async (
  cmd: TemplateStringsArray | string,
  ...args: Array<string | number>
) => {
  const proc = execWrapper(cmd, ...args);
  const text = await new Response(proc.stdout).text();
  return text
}
