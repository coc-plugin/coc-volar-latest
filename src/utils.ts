export function timeOut(time: number) {
  return new Promise((r) => setTimeout(r, time));
}
