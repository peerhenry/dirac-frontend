class StringMatcher{
  itMatches(words, text)
  {
    return words.join(" ") == text;
  }

  endsWith(words, ending){
    let expLastWords = ending.toLowerCase().split(" ")
    let lastWords = words.slice(words.length - expLastWords.length, words.length);
    return lastWords.join(" ") == ending;
  }

  startsWith(words, beginning){
    let beginWords = beginning.toLowerCase().split(" ")
    let lastWords = words.slice(0, beginWords.length);
    return lastWords.join(" ") == beginning;
  }
}

export default new StringMatcher()