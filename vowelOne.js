/**
 * It takes a string and returns a string of 1s and 0s. 1s represent vowels and 0s represent
 * consonants.
 * @param s - the string to be evaluated
 * @returns a string of 1's and 0's.
 */
function vowelOne(s) {
  return s
    .split("")
    .map((x) => ("aeiouAEIOU".includes(x) ? 1 : 0))
    .join("");
}

/**
 * It replaces all non-vowels with 0 and all vowels with 1.
 * @param s - the string to be evaluated
 * @returns A string of 1's and 0's.
 */
function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, "0").replace(/[^\d]/g, "1");
}
