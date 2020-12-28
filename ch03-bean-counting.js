function countChar(string, char) {
  let numberOfChar = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === char) {
      numberOfChar++;
    }
  }
  return numberOfChar;
}

function countBs(string) {
  return countChar(string, "B");
}