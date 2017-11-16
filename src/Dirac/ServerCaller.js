import axios from "axios"

class ServerCaller{

  testGetRequest(){
    axios.get('testget')
      .then(resp => {
        console.log(JSON.stringify(resp))
        store.registerDiracInput(resp.data.content)
      })
      .catch(err => {
        store.registerDiracInput("The ajax get test failed.")
        console.log(err)
      })
  }

  testPostRequest(){
    console.log('now going to call /ajaxpost');
    axios.post('testpost')
      .then(resp => {
        console.log(JSON.stringify(resp))
        store.registerDiracInput(resp.data.content)
      })
      .catch(err => {
        store.registerDiracInput("The ajax post test failed.")
        console.log(err)
      })
  }

  callWithMessage(message){
    axios.post('respond', message)
      .then(resp => {
        store.registerDiracInput(resp.data.content)
      })
      .catch(err => {
        store.registerDiracInput("I'm sorry, I can't seem to connect to the server in order to reply.")
        console.log(err)
      })
  }
}

export default new ServerCaller()