// ambiguous:
// hell shell ill well id

export default (words) => {
  console.log()
  let formattedWords = []
  words.forEach(word => {
    switch(word){
      // is
      case "whats":
      case "whys":
      case "wheres":
      case "whens":
      case "hows":
      case "whos":
      case "theres":
      case "shes":
      case "hes":
        var uncontracted = word.slice(0, -1);
        formattedWords.push(uncontracted);
        formattedWords.push("is");
        break;
      case "what's":
      case "why's":
      case "where's":
      case "when's":
      case "how's":
      case "who's":
      case "there's":
      case "she's":
      case "he's":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("is");
        break;
      // have
      case "ive":
      case "youve":
      case "weve":
      case "theyve":
      case "couldve":
      case "mustve":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("have");
        break;
      case "i've":
      case "you've":
      case "we've":
      case "they've":
      case "could've":
      case "must've":
        var uncontracted = word.slice(0, -3);
        formattedWords.push(uncontracted);
        formattedWords.push("have");
        break;
      // will
      case "i'll":
      case "you'll":
      case "we'll":
      case "he'll":
      case "she'll":
      case "how'll":
      case "it'll":
      case "who'll":
        var uncontracted = word.slice(0, -3);
        formattedWords.push(uncontracted);
        formattedWords.push("will");
        break;
      // would
      case "youd":
        var uncontracted = word.slice(0, -1);
        formattedWords.push(uncontracted);
        formattedWords.push("would");
        break;
      case "i'd":
      case "he'd":
      case "she'd":
      case "it'd":
      case "they'd":
      case "you'd":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("would");
        break;
      // not
      case "dont":
      case "doesnt":
      case "didnt":
      case "couldnt":
      case "hadnt":
      case "neednt":
      case "isnt":
      case "shouldnt":
        var uncontracted = word.slice(0, -2);
        formattedWords.push(uncontracted);
        formattedWords.push("not");
        break;
      case "don't":
      case "doesn't":
      case "didn't":
      case "couldn't":
      case "hadn't":
      case "needn't":
      case "isn't":
      case "shouldn't":
        var uncontracted = word.slice(0, -3);
        formattedWords.push(uncontracted);
        formattedWords.push("not");
        break;
      case "can't":
      case "cant":
        formattedWords.push("can");
        formattedWords.push("not");
      case "won't":
      case "wont":
        formattedWords.push("will");
        formattedWords.push("not");
      // extra
      case "i'm":
      case "im":
        formattedWords.push("i");
        formattedWords.push("am");
      default:
        formattedWords.push(word);
    }
  })
  return formattedWords
}