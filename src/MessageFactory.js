class MessageFactory{
  createMessage(line){
    return {
      content: line,
      user: 'Default'
    }
  }

  createDiracMessage(line){
    return {
      content: line,
      user: 'Dirac'
    }
  }
}

export default new MessageFactory();