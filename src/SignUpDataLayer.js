import { firebaseAuth, firebaseDatabaseRef } from './firebase'
import {AsyncStorage} from 'react-native';

        export function SignUp  (firstName, lastName, email, password,callback)  {
        console.log('zxcvbnmnbvcx',email)        
        firebaseAuth.createUserWithEmailAndPassword(
            email,
            password,
        ).then((success) => {
            console.log(success)
            firebaseDatabaseRef.ref('/users /' + success.user.uid + '/userData/').set({
                firstName: firstName,
                lastName: lastName,
            })
            return callback(firstName)
        }).catch((err)=>{console.log('error =>',err)})
        }

        export function SignIn  (email, password,callback)  {
         console.log(email)        
          firebaseAuth.signInWithEmailAndPassword(
            email,
            password,
        ).then((success) => {
             console.log(success)
             AsyncStorage.setItem('key', success.user.uid )
             const id= AsyncStorage.getItem('key')
             console.log("inside the sigin function => ",id)
           return callback( success.user.uid)
         }).catch((err)=>{console.log('err in login =>',err)})
        }

        export function createUserNote( obj ){
            if(obj.title!=''){
            AsyncStorage.getItem('key').then((success)=>{
                console.log("key is =>",success);
                console.log("Trash ->" + obj.trashStatus)
                console.log("Archive -> " + obj.archiveStatus)
                console.log("Pin ->" + obj.pinStatus)
            firebaseDatabaseRef.ref('/users /' + success + '/notes/').push(obj);
            })
        }
        }

        export function getNotes(callback){
            AsyncStorage.getItem('key').then((success)=>{
            console.log('app : ' + success);
            firebaseDatabaseRef.ref('/users /'+success+'/notes/').on('value',(snapshot)=>
            {
                console.log('uid inside the getnotes -> ',success)
                console.log("get Notes --->> ",snapshot.val())
                if(snapshot.val()!=null){
                return callback(snapshot.val())
                }
               // callback("hi")
            })
            })
        }

        export function updateUserNote(obj,noteUpdationId){
            AsyncStorage.getItem('key').then((success)=>{
            console.log('Updation initiated : ' + success);
            console.log('noteId is ------>',noteUpdationId)
            //console.log("Trash" + obj.trashStatus)
            //console.log("Archive " + obj.archiveStatus)
            console.log("::::::::::::::::::::::::::::::::")
            console.log("Pin----------------->"+obj.title+"------->" + obj.togglePinOrUnpin)
            console.log("Title" + obj.title)
            console.log("Data" + obj.textNote)
            console.log("::::::::::::::::::::::::::::::::::::::")
            firebaseDatabaseRef.ref('/users /' + success + '/notes/' + noteUpdationId).update(obj);
            
            }).catch((err)=>{console.log('err in updation note =>',err)})
        }




