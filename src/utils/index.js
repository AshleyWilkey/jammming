export function truncate(str, len) {
  return str && str.length > len ? str.slice(0, len) + " ..." : str;
}
