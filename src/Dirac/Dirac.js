import fac from "../MessageFactory"
import questionResponder from "./DiracQuestionResponder"
import timeFormatter from "./TimeFormatter";
import analyzer from "./MessageAnalyzer"

class Dirac{

  respondToSentence(message){
    let words = analyzer.analyze(message);
    let response = "I didn't understand the sentence."
    switch(words[0]){
      case "what":
        response = questionResponder.what(message, words);
        break;
      case "why":
        response = questionResponder.why(message, words);
        break;
      case "where":
        response = questionResponder.where(message, words);
        break;
      case "when":
        response = questionResponder.when(message, words);
        break;
      case "how":
        response = questionResponder.how(message, words);
        break;
      case "who":
        response = questionResponder.who(message, words);
        break;
    }
    return response
  }

  respondToTwoWords(message){
    const words = message.content.split(' ');
    let response = "I'm sorry, I don't respond to sentences of two words."
    return response;
  }

  respondToOneWord(word){
    let response = "I don't understand that word."
    switch(word.toLowerCase()){
      case 'greetings':
      case 'hello':
      case 'hi':
      case 'sup':
        response = 'Hello.'
        break;
      case 'time':
        response = timeFormatter.getTime();
        break;
      case 'date':
      response = timeFormatter.getDate();
        break;
    }
    return response;
  }

  respond(message){
    const words = message.content.split(' ');
    var response = "You used " + words.length + " words.";

    switch(words.length){
      case 0: 
        response = "Please write something"
        break;
      case 1:
        response = this.respondToOneWord(words[0])
        break;
      case 2:
        response = this.respondToTwoWords(message)
        break;
      default:
        response = this.respondToSentence(message)
        break;
    }

    return fac.createDiracMessage(response);
  }
}

export default new Dirac();