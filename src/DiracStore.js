import { autorun, observable } from "mobx"
import fac from "./MessageFactory"
import dirac from "./Dirac/Dirac"
import analyzer from "./Dirac/MessageAnalyzer"

class DiracStore {
  @observable messages = [
    {
      content: 'Say hi to Dirac, or anything else.'
    },
    {
      content: 'He will do his best to give a proper response...'
    }
  ]

  addMessage(message){
    this.messages.unshift(message);
  }

  registerDiracInput(input){
    let responseMessage = fac.createDiracMessageModel(input)
    this.addMessage(responseMessage)
  }

  dispatch(userInput){
    let message = analyzer.analyze(userInput);
    this.addMessage(message);
    setTimeout(function() {
      let response = dirac.respond(message);
      if(response.shouldAddMessage){
        this.registerDiracInput(response.content);
      }
    }.bind(this), 1000);
  }
}

const store = window.store = new DiracStore()

export default store