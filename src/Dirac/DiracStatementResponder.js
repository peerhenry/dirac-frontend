import matcher from './StringMatcher'
import store from '../DiracStore'

class DiracStatementResponder{
  I(message, response){
    response.content = "OK"
  }

  my(message, response){
    if(matcher.startsWith(message.words, "my name is")){
      var rest = message.words.slice(3, message.words.length).join(" ")
      if(store.userData.name){
        response.content = "I have your name registered as: " + rest + ". Do you want me to change it?"
      }
      else{
        store.changeUserName(rest);
        response.content = "Pleased to meet you, " + rest + ".";
      }
    }
    else response.content = "OK"
  }
}

export default new DiracStatementResponder()