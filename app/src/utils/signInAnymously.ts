import { firebase } from "../lib/firebase.prod"

const signInAnonymously = () => {
    
    firebase
        .auth()
        .signInAnonymously()
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorCode, '#', errorMessage)
        })
}

export default signInAnonymously