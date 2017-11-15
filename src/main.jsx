import { render } from 'react-dom'
import store from './DiracStore'
import App from './App'

const app = document.getElementById('app')
render(<App store={store}/>, app)