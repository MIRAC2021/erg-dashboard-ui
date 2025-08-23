/**
 * Returns a sentence case copy of the string.
 *
 * @param {string} str - string to convert to sentence case
 * @returns {string} A sentence case copy of str.
 */
export function toSentenceCase(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

