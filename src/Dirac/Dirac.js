import store from "../DiracStore"
import questionResponder from "./DiracQuestionResponder"
import statementResponder from "./DiracStatementResponder"
import timeFormatter from "./TimeFormatter"
import server from "./ServerCaller"

class Dirac{

  respondToSentence(response, message){
    switch(message.words[0]){
      case "what":
        questionResponder.what(response, message);
        break;
      case "why":
        questionResponder.why(response, message);
        break;
      case "where":
        questionResponder.where(response, message);
        break;
      case "when":
        questionResponder.when(response, message);
        break;
      case "how":
        questionResponder.how(response, message);
        break;
      case "who":
        questionResponder.who(response, message);
        break;
      case "i":
        statementResponder.I(response, message);
        break;
      case "my":
        statementResponder.my(response, message);
        break;
    }
  }

  respondToTwoWords(response, message){
    response.content = "I'm sorry, I don't respond to sentences of two words."
  }

  respondToOneWord(response, word){
    response.content = "I don't understand that word."
    switch(word.toLowerCase()){
      case 'greetings':
      case 'hello':
      case 'hi':
      case 'sup':
        response.content = 'Hello.'
        break;
      case 'time':
        response.content = timeFormatter.getTime();
        break;
      case 'date':
        response.content = timeFormatter.getDate();
        break;
      case 'testget':
        response.shouldAddMessage = false
        server.testGetRequest()
        break;
      case 'testpost':
        response.shouldAddMessage = false
        server.testPostRequest()
        break;
      case 'why':
      case 'what':
      case 'where':
      case 'who':
      case 'when':
      case 'how':
        response.content = word + " what?"
        break;
      case 'shit':
      case 'fuck':
      case 'asshole':
      case 'cunt':
      case 'bitch':
        response.content = "Mind your language."
    }
  }

  // Dirac entry point
  respond(message){
    let response = {
      content: "I am sorry, I am unable to respond to that message.", // default response
      shouldAddMessage: true  // should the message be added to the store?
    }

    switch(message.words.length){
      case 0: 
        response.content = "Please write something"
        break;
      case 1:
        this.respondToOneWord(response, message.words[0])
        break;
      case 2:
        this.respondToTwoWords(response, message)
        break;
      default:
        this.respondToSentence(response, message)
        break;
    }

    return response;
  }
}

export default new Dirac();