class MessageFactory{
  createMessageModel(line){
    return {
      content: line,
      user: 'Default'
    }
  }

  createDiracMessageModel(line){
    return {
      content: line,
      user: 'Dirac'
    }
  }
}

export default new MessageFactory();