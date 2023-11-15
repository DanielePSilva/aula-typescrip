const firstName = prompt("Primeiro Nome:") ?? "";
const lastName = prompt("último Nome:") ?? "";

function formatWord(word: string) {
  const firstLetterBig = word.charAt(0).toUpperCase();
  const restOfTheWord = word.slice(1).toLowerCase();
  return `${firstLetterBig}${restOfTheWord}`;
}
const finalWord = `${formatWord(firstName)} ${formatWord(lastName)}`;

alert(finalWord);
