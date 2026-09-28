const ANSI =
  /[\u001B\u009B][[\]()#;?]*(?:(?:(?:[a-zA-Z\d]*(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/gu;

export function stripAnsi(value) {
  if (typeof value !== "string") throw new TypeError("Expected value to be a string");
  return value.replace(ANSI, "");
}

export function hasAnsi(value) {
  if (typeof value !== "string") return false;
  ANSI.lastIndex = 0;
  const result = ANSI.test(value);
  ANSI.lastIndex = 0;
  return result;
}
