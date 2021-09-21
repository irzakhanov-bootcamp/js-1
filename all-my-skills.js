const secretWord = "intocode";

let fetchedWord = "don`t know";

if (secretWord === fetchedWord) {
  console.log("Правильно");
} else {
  console.log("Не правильно");
}

fetchedWord = "intocode";

if (secretWord === fetchedWord) {
  console.log("Правильно");
  let sucessText = "Введенное слово " + fetchedWord;
} else {
  console.log("Не правильно");
  let errorText = `Веденное слово ${fetchedWord}`;
  console.log(errorText);
}
