import timeFormatter from "./TimeFormatter"
import store from "../DiracStore"
import server from "./ServerCaller"
import matcher from "./StringMatcher"

class DiracQuestionResponder{

  // private
  callServer(message, response){
    server.callWithMessage(message)
    response.shouldAddMessage = false;
  }

  // public

  respond(message, response){
    switch(message.words[0]){
      case "what":
        this.what(message, response);
        break;
      case "why":
        this.why(message, response);
        break;
      case "where":
        this.where(message, response);
        break;
      case "when":
        this.when(message, response);
        break;
      case "how":
        this.how(message, response);
        break;
      case "who":
        this.who(message, response);
        break;
    }
  }

  what(message, response){
    let formattedWords = message.words;
    switch(formattedWords[1])
    {
      case "are":
        if(formattedWords.length === 3 && formattedWords[2] === "you") response = "I am an AI."
        break;
      case "s":
      case "is":
        if(formattedWords.length === 4 && matcher.endsWith(formattedWords, "the time")){
          response.content = timeFormatter.getTime();
        }
        else if(matcher.itMatches(formattedWords, "what is your name")){
          response.content = "My name is " + store.diracData.name + "."
        }
        else {
          this.callServer(message, response)
        }
        break;
      case "was":
      case "were":
        this.callServer(message, response)
        break;
      case "time":
        if(matcher.itMatches(formattedWords, "what time is it")){
          response.content = timeFormatter.getTime();
        }
        break;
      case "can":
        if(message.words.length == 4 && (matcher.endsWith(message.words, "you do") || (matcher.endsWith(message.words, "you say")))){
          response.content = "I can do simple calculations, tell the time and look stuff up on wikipedia."
        }
    }
  }

  who(message, response){
    let formattedWords = message.words;
    response.content = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(formattedWords.length === 3 && formattedWords[2] === "you") response.content = "I am " + store.diracData.name + "."
        else{
          this.callServer(message, response)
        }
        break;
      case "s":
      case "is":
      case "was":
      case "were":
        this.callServer(message, response)
        break;
    }
  }

  why(message, response){
    let formattedWords = message.words
    response.content = "I don't know."
  }

  when(message, response){
    let formattedWords = message.words;
    response.content = "I don't know."
  }

  where(message, response){
    let formattedWords = message.words;
    response.content = "I don't know."
  }

  how(message, response){
    let formattedWords = message.words;
    response.content = "I don't know."
    switch(formattedWords[1])
    {
      case "are":
        if(matcher.itMatches(formattedWords, "how are you doing") || matcher.itMatches(formattedWords, "how are you")) response.content = "I am fine, thank you."
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