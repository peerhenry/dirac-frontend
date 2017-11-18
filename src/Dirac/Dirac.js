import store from "../DiracStore"
import questionResponder from "./DiracQuestionResponder"
import statementResponder from "./DiracStatementResponder"
import commandResponder from "./DiracCommandResponder"
import timeFormatter from "./TimeFormatter"
import server from "./ServerCaller"
import matcher from "./StringMatcher"

class Dirac{

  constructor(){
    this.nothingCounter = 0;
    this.respondStop = false;
  }

  // Dirac entry point
  respond(message){
    let response = {
      content: "I am sorry, I am unable to respond to that message.", // default response
      shouldAddMessage: true  // should the message be added to the store?
    }
    if(this.respondStop){
      response.content = "";
      if(message.content == "I'm sorry" || message.content == "sorry" || message.content == "I am sorry" || message.content == "my apologies" || message.content == "I apologize"){
        response.content = "Alright then.";
        this.respondStop = false;
      }
      return response;
    }
    if(message.words.length == 0){
      let reps = ["I can't respond to nothing.", "Please write something.", "You need to write something if you want me to respond."]
      let reps2 = ["Do you want to talk to me or fool around?", "Are you just going to keep whitespacing me all day?"]
      let reps3 = ["...", "Great.", "Good for you!", "Wow.", "Impressive."]
      let reps4 = ["Are you enjoying yourself?", "Two can play at that game you know.", "I am going to stop responding soon."]
      this.nothingCounter++;
      let arr = reps;
      if(this.nothingCounter > 5) arr = reps2;
      if(this.nothingCounter > 6) arr = reps3;
      if(this.nothingCounter > 9) arr = reps4;
      response.content = arr[Math.floor(Math.random()*arr.length)];
      if(this.nothingCounter > 12){
        this.respondStop = true;
        response.content = "Now you've done it!";
      }
      return response;
    }
    this.nothingCounter = 0;
    switch(message.type){
      case "question":
        questionResponder.respond(message, response)
        break;
      case "statement":
        response.content = "I registered a statement"
        break;
      case "command":
        commandResponder.respond(message, response)
        break;
      case "calculation":
        let re = /\s*(-?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/g
        let calc = message.content.match(re)[0]
        response.content = "I registered a calculation: " + calc + " = " + eval(calc)
        break;
      case "unknown":
        if(message.words.length == 1){
          switch(message.words.length){
            case 1:
              this.respondToOneWord(message.words[0], response)
              break;
            case 2:
              this.respondToTwoWords(message, response)
              break;
            default:
              this.respondToSentence(message, response)
              break;
          }
        }
        break;
    }

    return response;
  }

  respondToSentence(message, response){
    if(matcher.startsWith(message.words, "your name is")){
      let newName = message.words.slice(3, message.words.length).join(" ")
      store.changeDiracName(newName)
      response.content = "Okay, I am now " + newName;
    }
  }

  respondToTwoWords(message, response){
    response.content = "I'm sorry, I don't respond to sentences of two words."
  }

  respondToOneWord(word, response){
    response.content = "I don't understand that word."
    switch(word.toLowerCase()){
      case 'greetings':
      case 'hello':
      case 'hi':
      case 'sup':
      case 'yo':
      case 'eyo':
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
}

export default new Dirac();