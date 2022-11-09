/**
 * "Replace all capital letters with a space and the capital letter."
 *
 * The first argument to replace is a regular expression. The regular expression /[A-Z](.)/g looks for
 * any capital letter followed by any character. The parentheses around the . are called a capture
 * group. They allow us to refer to the character that follows the capital letter
 * @param string - The string to be modified.
 * @returns the string with a space before each capital letter.
 */
function solution(string) {
  return string.replace(/[A-Z](.)/g, (c) => " " + c);
}

/**
 * It takes a string and replaces all capital letters with a space and the capital letter
 * @param string - The string to be modified.
 * @returns The string with a space before each capital letter.
 */
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
