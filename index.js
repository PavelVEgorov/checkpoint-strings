function countVowels(text) {
  const vowels = text.match(/[уУеЕёЁыЫаАоОэЭяЯиИюЮ]/g);
  return vowels.length;
}

function splitWords(text) {
  return text.match(/[а-яА-я]+/gi);
}

function removePunctuation(text) {
  return text.match(/[а-яА-я]/gmi).join('');
}

module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
