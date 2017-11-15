import { autorun, observable } from "mobx"

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
}

const store = window.store = new DiracStore()

export default store