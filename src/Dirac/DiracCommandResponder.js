import matcher from "./StringMatcher"
import jokes from "./jokes"

class DiracCommandResponder{
  respond(message, response){
    if(matcher.itMatches(message.words, "tell me a joke")){
      response.content = jokes[Math.floor(Math.random()*jokes.length)]
    }
    else{
      response.content = "I registered a command."
    }
  }
}

export default new DiracCommandResponder()