import uncontract from "./Uncontract"

class MessageAnalyzer{

  analyze(input){
    let words = this.format(input)
    console.log('words: ' + JSON.stringify(words))
    let messageType = this.determineMessageType(input, words)
    let message = {
      content: input,
      formattedContent: words.join(" "),
      user: "Default",
      words: words,
      type: messageType
    }
    return message
  }

  // formats raw user input to an array of words
  format(input){
    // make an array of lowercase words without punctuation
    let rawWords = input.toLowerCase().split(/[ .,"<>?.!;:]/g).filter(function(n){ return n != undefined && n != "" })
    let words = uncontract(rawWords)
    return words
  }

  // question, statement, command, calculation
  determineMessageType(input, words){
    let messageType = "unknown"
    switch(words[0]){
      case "what":
      case "why":
      case "where":
      case "when":
      case "how":
      case "who":
        messageType = "question"
        break;
      case "tell":
      case "do":
      case "say":
        messageType = "command"
        break;
    }
    
    // this regex checks if the message ends with a simple calculation
    let re = /\s*(-?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;
    if(input.match(re)){
      messageType = "calculation"
    }
    return messageType
  }
}

export default new MessageAnalyzer()