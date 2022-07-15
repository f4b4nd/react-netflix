import ReactDOM from 'react-dom'

import 'normalize.css'

import { FirebaseContextProvider } from './context/firebase'

import App from './app'


ReactDOM.render(
    <FirebaseContextProvider>
        <App />
    </FirebaseContextProvider>,
    document.getElementById('root')
)