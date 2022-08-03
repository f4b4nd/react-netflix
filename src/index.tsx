import ReactDOM from 'react-dom/client'

import 'normalize.css'

import { FirebaseContextProvider } from './context/firebase'
import { WishListContextProvider } from './context/wishlist'

import App from './app'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <FirebaseContextProvider>
        <WishListContextProvider>
            <App />
        </WishListContextProvider>
    </FirebaseContextProvider>
)