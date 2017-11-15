class DiracStatementResponder{
  I(response, message){
    response.content = "OK"
  }

  my(response, message){
    response.content = "OK"
  }
}

export default new DiracStatementResponder()