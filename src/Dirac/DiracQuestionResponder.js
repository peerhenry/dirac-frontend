import timeFormatter from "./TimeFormatter";

class DiracQuestionResponder{

  // private

  itMatches(words, question)
  {
    return words.join(" ") == question;
  }

  endsWith(words, ending){
    let expLastWords = ending.toLowerCase().split(" ")
    let lastWords = words.slice(words.length - expLastWords.length, words.length);
    return lastWords.join(" ") == ending;
  }

  // public

  what(response, message){
    let formattedWords = message.words;
    switch(formattedWords[1])
    {
      case "are":
        if(formattedWords.length === 3 && formattedWords[2] === "you") response = "I am an AI."
        break;
      case "s":
      case "is":
        if(formattedWords.length === 4 && this.endsWith(formattedWords, "the time")){
          response.content = timeFormatter.getTime();
        }
        else if(this.itMatches(formattedWords, "what is your name")){
          response.content = "My name is Dirac."
        }
        break;
      case "was":
        // look it up
        server.callWithMessage(message)
        break;
      case "time":
        if(this.itMatches(formattedWords, "what time is it")){
          response.content = timeFormatter.getTime();
        }
        break;
    }
  }

  who(response, message){
    let formattedWords = message.words;
    response.content = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(formattedWords.length === 3 && formattedWords[2] === "you") response.content = "I am Dirac."
        break;
      case "s":
      case "is":
      case "was":
        // look it up
        break;
    }
  }

  why(response, message){
    let formattedWords = message.words
    response.content = "I don't know."
  }

  when(response, message){
    let formattedWords = message.words;
    response.content = "I don't know."
  }

  where(response, message){
    let formattedWords = message.words;
    response.content = "I don't know."
  }

  how(response, message){
    let formattedWords = message.words;
    response.content = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(this.itMatches(formattedWords, "how are you doing") || this.itMatches(formattedWords, "how are you")) response.content = "I am fine, thank you."
        break;
      case "s":
      case "is":
      case "was":
        // look it up
        break;
    }
  }
}

export default new DiracQuestionResponder();