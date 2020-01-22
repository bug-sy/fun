import { firebaseAuth, firebaseDatabaseRef } from './firebase'
//import { createUserNote, getNotes } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'


export function SignUp  (first_name, last_name, email, password,callback)  {
    console.log(email)
    
     firebaseAuth.createUserWithEmailAndPassword(
        email,
        password,
    ).then((success) => {
        console.log(success)
        firebaseDatabaseRef.ref('/users /' + success.user.uid + '/userData/').set({
            first_name: first_name,
            last_name: last_name,
        })
        callback()
    })

    }
