import timeFormatter from "./TimeFormatter";

class DiracQuestionResponder{

  itMatches(words, question)
  {
    return words.join(" ") == question;
  }

  endsWith(words, ending){
    let expLastWords = ending.toLowerCase().split(" ")
    let lastWords = words.slice(words.length - expLastWords.length, words.length);
    return lastWords.join(" ") == ending;
  }

  what(message, formattedWords){
    let response = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(formattedWords.length === 3 && formattedWords[2] === "you") response = "I am an AI."
        break;
      case "s":
      case "is":
        if(formattedWords.length === 4 && this.endsWith(formattedWords, "the time")){
          response = timeFormatter.getTime();
        }
        break;
      case "was":
        // look it up
        break;
      case "time":
        if(this.itMatches(formattedWords, "what time is it")){
          response = timeFormatter.getTime();
        }
        break;
    }
    return response
  }

  who(message, formattedWords){
    let response = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(formattedWords.length === 3 && formattedWords[2] === "you") response = "I am Dirac."
        break;
      case "s":
      case "is":
      case "was":
        // look it up
        break;
    }
    return response
  }

  why(message, formattedWords){
    let response = "I don't know."
    return response
  }

  when(message, formattedWords){
    let response = "I don't know."
    return response
  }

  where(message, formattedWords){
    let response = "I don't know."
    return response
  }

  how(message, formattedWords){
    console.log('how reached: ' + JSON.stringify(formattedWords));
    let response = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(this.itMatches(formattedWords, "how are you doing")) response = "I am fine, thank you."
        break;
      case "s":
      case "is":
      case "was":
        // look it up
        break;
    }
    return response
  }
}

export default new DiracQuestionResponder();