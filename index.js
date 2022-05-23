function countVowels(text) {
  const vowels = text.match(/[уеёыаоэяию]/gi);
  return vowels.length;
}

function splitWords(text) {
  return text.match(/[а-яё]+/gi);
}

function removePunctuation(text) {
  return text.match(/[а-яё]/gi).join('');
}

module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
