import firebase from 'firebase';

export async function  registerUser(email, password){
	return (await firebase.auth().createUserWithEmailAndPassword(email, password)).user
}

export async function loginUser(email, password){
	return (await firebase.auth().signInWithEmailAndPassword(email, password)).user
}

export async function logoutUser(){
	return (await firebase.auth().signOut())
}