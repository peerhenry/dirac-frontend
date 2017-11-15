import React from "react"

const messageStyle = {
  background: 'white',
  padding: '12px',
  borderRadius: '4px',
  marginBottom: '8px',
  boxShadow: '2px 2px grey'
}

const diracStyle = {
  fontWeight: "bold",
  fontFamily: "Lucida Console,Lucida Sans Typewriter,monaco,Bitstream Vera Sans Mono,monospace"
}

const Message = ({message}) => (
  <li className="message-li" style={messageStyle}>
    <span style={diracStyle}>{(message.user === "Dirac") && "Dirac"}{message.user && "⟩ "}</span>
    {message.content}
  </li>
)

export default Message