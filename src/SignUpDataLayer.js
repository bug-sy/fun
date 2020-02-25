import { firebaseAuth, firebaseDatabaseRef } from './firebase'
import { AsyncStorage } from 'react-native';

export function SignUp(firstName, lastName, email, password, callback) {
    firebaseAuth.createUserWithEmailAndPassword(
        email,
        password,
    ).then((success) => {
        firebaseDatabaseRef.ref('/users /' + success.user.uid + '/userData/').set({
            firstName : firstName,
            lastName : lastName,
        })
        return callback(firstName)
    }).catch((err) => { console.log('error =>', err) })
}

export function SignIn(email, password, callback) {
    firebaseAuth.signInWithEmailAndPassword(
        email,
        password,
    ).then((success) => {
        AsyncStorage.setItem('key', success.user.uid)
         AsyncStorage.getItem('key').then((data)=>{
         })
        return callback( success.user.uid)
    }).catch((err) => { console.log('err in login =>', err) })
}

export function createUserNote(obj) {
    if (obj.title != '') {
        AsyncStorage.getItem('key').then((success) => {
            firebaseDatabaseRef.ref('/users /' + success + '/notes/').push(obj);
        })
    }
}

export function getNotes(callback) {
    AsyncStorage.getItem('key').then((success) => {
        firebaseDatabaseRef.ref('/users /' + success + '/notes/').on('value', (snapshot) => {
            if (snapshot.val() != null) {
                return callback(snapshot.val())
            }
        })
    })
}

export function updateUserNote(obj, noteUpdationId) {
    AsyncStorage.getItem('key').then((success) => {
        firebaseDatabaseRef.ref('/users /' + success + '/notes/' + noteUpdationId).update(obj);
    }).catch((err) => { console.log('err in updation note =>', err) })
}

export function deleteUserNote(noteDeletionId) {
    AsyncStorage.getItem('key').then((success) => {
        firebaseDatabaseRef.ref('/users /' + success + '/notes/' + noteDeletionId).remove();
    }).catch((err) => { console.log('err in deleting note =>', err) })
}



export function createLabelNote(labelData) {
    AsyncStorage.getItem('key').then((success) => {
    console.log("uid----->",success,"labelData ------->",labelData)
    firebaseDatabaseRef.ref('/users /' + '/labels/').push(labelData);
    console.log("labelData entered in firebase")
}).catch((err) => { console.log('err in deleting note =>', err) })
}

export function getLabels(callback) {
    firebaseDatabaseRef.ref('/users /' + '/labels/').on('value', (snapshot) => {
        console.log("get Labels", snapshot.val())
        callback(snapshot.val())
    })
}

export function updateTheLabel(labelKeyToUpdate,noteLabel) {
    firebaseDatabaseRef.ref('/users /' + '/labels/' + labelKeyToUpdate).update(noteLabel)
}

export function deleteTheLabel(labelKeyToUpdate) {
    firebaseDatabaseRef.ref('/users /' + '/labels/' + labelKeyToUpdate).remove()
}