import {initializeApp} from "firebase/app";
import {addDoc, collection, getDocs, getFirestore, query} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfTzr1Bb6vQEDMAMLW6k1IxkS4NBO89Eg",
    authDomain: "sit-with-me-ab673.firebaseapp.com",
    projectId: "sit-with-me-ab673",
    storageBucket: "sit-with-me-ab673.appspot.com",
    messagingSenderId: "626380445969",
    appId: "1:626380445969:web:a9fc3c95c8ff41d51114b0"
};

const db = getFirestore(initializeApp(firebaseConfig))

export const DataAccessService = {
    AddTable: async function(x, y, inUse){
        try{
            await addDoc(collection(db, "Tables"), {
                x: x,
                y: y,
                inUse: inUse
            });
        } catch (e){
            return e
        }
    },

    GetTables: async function() {
        try{
            const q = query(collection(db, "Tables"));
            return await getDocs(q)
        } catch (e) {
            return e
        }
    },

    AddSeat: async function(newSeat) {
        try{
            console.log(newSeat)
            const add = await addDoc(collection(db, "Users"), newSeat);
            return;
        } catch (e) {
            return e
        }
    }
}