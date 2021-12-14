import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebase = Firebase.initializeApp(
    {
        "apiKey": process.env.REACT_APP_API_KEY,
        "authDomain": process.env.REACT_APP_AUTH_DOMAIN,
        "projectId": process.env.REACT_APP_PROJECT_ID,
        "storageBucket": process.env.REACT_APP_STORAGE_BUCKET,
        "messagingSenderId": process.env.REACT_APP_MESSAGING_SENDER_ID,
        "appId": process.env.REACT_APP_APP_ID,
        "measurementId": process.env.REACT_APP_MEASUREMENT_ID
    })

// 1) when seeding the database you'll have to uncomment this!
/*
import { seedDatabase } from '../seed' 
seedDatabase(firebase) 
*/
// 2) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export {firebase}