import axios from "axios"

class ServerCaller{
  callForOneWord(word){
    axios.post('/ajax', word)
    .then(resp => {
      console.log(JSON.stringify(resp))
      store.registerDiracInput(resp.data.content)
    })
    .catch(err => {
      store.registerDiracInput("I'm sorry, I can't seem to connect to the server in order to reply.")
      console.log(err)
    })
  }

  callWithMessage(message){
    axios.post('/ajax', message)
    .then(resp => {
      console.log(JSON.stringify(resp))
      store.registerDiracInput(resp.data.content)
    })
    .catch(err => {
      store.registerDiracInput("I'm sorry, I can't seem to connect to the server in order to reply.")
      console.log(err)
    })
  }
}

export default new ServerCaller()