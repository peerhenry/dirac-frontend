class MessageAnalyzer{
  analyze(input){
    let words = input.toLowerCase().split(/[ .,'"<>?.!;:]/g).filter(function(n){ return n != undefined && n != "" })
    let message = {
      content: input,
      user: "Default",
      words: words
    }
    return message
  }
}

export default new MessageAnalyzer()