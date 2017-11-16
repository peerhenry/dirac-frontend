import { render } from 'react-dom'
import store from './DiracStore'
import App from './Components/App'

const app = document.getElementById('app')
render(<App store={store}/>, app)