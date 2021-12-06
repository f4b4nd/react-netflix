import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import FirebaseCredentials from './firebase-credentials.json'


const firebase = Firebase.initializeApp(FirebaseCredentials)

// 1) when seeding the database you'll have to uncomment this!
/*
import { seedDatabase } from '../seed' 
seedDatabase(firebase) 
*/
// 2) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export {firebase}