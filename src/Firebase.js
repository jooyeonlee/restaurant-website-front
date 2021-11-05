import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCSvgi6e2QDUUel98gqTZB2LJ87DCRhG-A",
    authDomain: "osaka-sushi-restaurant.firebaseapp.com",
    databaseURL: "https://osaka-sushi-restaurant-default-rtdb.firebaseio.com",
    projectId: "osaka-sushi-restaurant",
    storageBucket: "osaka-sushi-restaurant.appspot.com",
    messagingSenderId: "349418340023",
    appId: "1:349418340023:web:ce3c4e32981858a420d732"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();

const SignInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const userRef = collection(db, "users");
        const q = query(userRef, where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if(querySnapshot.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
        console.log(user)
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const SignInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const RegisterWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const SendPasswordResetEmail = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    database,
    SignInWithGoogle,
    SignInWithEmailAndPassword,
    RegisterWithEmailAndPassword,
    SendPasswordResetEmail,
    logout,
};