import React from "react"
import { observer } from "mobx-react"
import Message from "./Message"

@observer
class App extends React.Component {
  constructor(props){
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }

  keyPress(e){
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {
      this.props.store.dispatch(e.target.value);
      e.target.value = "";
      return false;
    }
  }

  render(){
    var env = process.env.NODE_ENV;
    var containerColor = '#ddd';
    var title = (env == 'development') ? 'Dirac in development' : 'Dirac';
    const mainContainerStyle = {
      width: '960px',
      paddingTop: '16px',
      paddingBottom: '32px',
      marginLeft: 'auto',
      marginRight: 'auto',
      background: containerColor
    }
    const chatContainerStyle = {
      width: '540px',
      margin: 'auto',
      border: '1px solid #333'
    }
    const titleStyle = {
      padding: '16px'
    }
    const inputWrapperStyle = {
      padding: '20px'
    }
    const inputStyle = {
      width: '100%',
      fontSize: 'large',
      padding: '8px'
    }
    const messageContainerStyle = {
      padding: '20px',
      fontSize: 'large'
    }
    return <div style={mainContainerStyle} className="border-box">
      <h1 style={titleStyle}>{title}</h1>
      <div style={chatContainerStyle}>
        <div id="form">
          <div style={inputWrapperStyle}>
            <input style={inputStyle} type="text" onKeyPress={this.keyPress}/>
          </div>
        </div>
        <hr />
        <div id="lines" style={messageContainerStyle}>
          <ul>
            { this.props.store.messages.map(
              (m, index) => (<Message message={m} key={index}/>))
            }
          </ul>
        </div>
      </div>
    </div>
  }
}

export default App