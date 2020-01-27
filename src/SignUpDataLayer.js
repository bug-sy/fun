import { firebaseAuth, firebaseDatabaseRef } from './firebase'
//import { createUserNote, getNotes } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'


export function SignUp  (first_name, last_name, email, password,callback)  {
    console.log('zxcvbnmnbvcx',email)
    
     firebaseAuth.createUserWithEmailAndPassword(
        email,
        password,
    ).then((success) => {
        console.log(success)
        firebaseDatabaseRef.ref('/users /' + success.user.uid + '/userData/').set({
            first_name: first_name,
            last_name: last_name,
        })
        return callback(first_name)
    }).catch((err)=>{console.log('err in login')})

    }


// export function SignIn  ( email, password,callback)  {
//         console.log(email)
        
//          firebaseAuth.createUserWithEmailAndPassword(
//             email,
//             password,
//         ).then((success) => {
//             console.log(success)
//             firebaseDatabaseRef.ref('/users /' + success.user.uid + '/userData/').set({
//                 first_name: first_name,
//                 last_name: last_name,
//             })
//             callback()
//         }).catch((err)=>{console.log('err')})
    
//         }


// export function logIn (email, password) => 
//     {
//         e.preventDefault()
//         await  firebaseAuth.signInWithEmailAndPassword(
//             email,
//             password,
//         ).then((success) => {
    
//         console.log("uid" + success.user.uid)
//         localStorage.setItem('uid', success.user.uid)
//            // const uid = localStorage.getItem('uid')
//            // console.log('app : ' + uid);
    
           
//         })