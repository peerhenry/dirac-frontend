class MessageAnalyzer{
  analyze(message){
    let words = message.content.toLowerCase().split(/[ .,'"<>?.!;:]/g).filter(function(n){ return n != undefined && n != "" })
    return words
  }
}

export default new MessageAnalyzer()