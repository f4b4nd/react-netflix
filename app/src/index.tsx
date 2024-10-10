import ReactDOM from 'react-dom/client'

import 'normalize.css'

import { FirebaseContextProvider } from './context/firebase'
import { WishListContextProvider } from './context/wishlist'
import { ProfileContextProvider } from './context/profile'

import App from './app'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <FirebaseContextProvider>
        <WishListContextProvider>
            <ProfileContextProvider>
                <App />
            </ProfileContextProvider>
        </WishListContextProvider>        
    </FirebaseContextProvider>
)