import { autorun, observable } from "mobx"
import fac from "./MessageFactory"
import dirac from "./Dirac/Dirac"
import analyzer from "./Dirac/MessageAnalyzer"

const RespondState = {
  HARDCODED: 1,
  LOGIC: 2
}

class DiracStore {

  // data
  @observable messages = [
    {
      content: 'Say hi to Dirac, or anything else.'
    },
    {
      content: 'He will do his best to give a proper response...'
    }
  ]

  @observable diracData = {
    name: 'Dirac'
  }

  @observable userData = {
    name: ''
  }

  respondState = RespondState.HARDCODED

  // methods
  addMessage(message){
    this.messages.unshift(message)
  }

  dispatch(userInput){
    if(respondState === RespondState.HARDCODED){
      this.respondHardcoded(userInput)
    }
  }

  respondHardcoded(userInput){
    let message = analyzer.analyze(userInput)
    this.addMessage(message)
    setTimeout(function() {
      let response = dirac.respond(message)
      if(response.shouldAddMessage){
        this.registerDiracInput(response.content)
      }
    }.bind(this), 700);
  }

  registerDiracInput(input){
    let responseMessage = fac.createDiracMessageModel(input)
    this.addMessage(responseMessage)
  }

  changeDiracName(newName){
    this.diracData.name = newName
  }

  changeUserName(newName){
    this.userData.name = newName
  }
}

const store = window.store = new DiracStore()

export default store