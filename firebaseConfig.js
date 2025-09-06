// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'





//initialize firebase auth
const auth = getAuth()


export { app, auth }