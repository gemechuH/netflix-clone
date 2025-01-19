// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { addDoc, collection, getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACO34vOoFp5c8K_-tAVSt8QULaxNWh0J0",
  authDomain: "netflix-clone-780a8.firebaseapp.com",
  projectId: "netflix-clone-780a8",
  storageBucket: "netflix-clone-780a8.firebasestorage.app",
  messagingSenderId: "825566907345",
  appId: "1:825566907345:web:14f186d456ab058981aef0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password) => {
    try {
        const res =await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, 'user'),{
            uid: user.uid,
            name,
            authProvider: 'local',
            email,

        })
    } catch (error) {
        console.log(error)  
        alert(error)
       
        
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        alert(error)
        
    }
}
const logout = () => {
    signOut(auth)
}


export{auth,db, login, signup,logout}