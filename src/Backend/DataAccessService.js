import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, setDoc, doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import User from "./User";

const firebaseConfig = {
  apiKey: "AIzaSyCfTzr1Bb6vQEDMAMLW6k1IxkS4NBO89Eg",
  authDomain: "sit-with-me-ab673.firebaseapp.com",
  projectId: "sit-with-me-ab673",
  storageBucket: "sit-with-me-ab673.appspot.com",
  messagingSenderId: "626380445969",
  appId: "1:626380445969:web:a9fc3c95c8ff41d51114b0",
};

const db = getFirestore(initializeApp(firebaseConfig));

export const DataAccessService = {
  AddTable: async function (id, x, y) {
    try {
      await setDoc(doc(db, "Tables", id), {
        x: x,
        y: y,
        inUse: false,
        Seated: []
      });
    } catch (e) {
      return e;
    }
  },

  GetTables: async function () {
    try {
      const q = query(collection(db, "Tables"));
      return await getDocs(q);
    } catch (e) {
      return e;
    }
  },

  AddSeat: async function (tableId, newUser) {
    try {
      await updateDoc(doc(db, "Tables", newUser.table), {
        Seated: arrayUnion({
          name: newUser.name,
          status: newUser.status,
          duration: newUser.duration
        })
      });
    } catch (e) {
      return e;
    }
  },

  RemoveSeat: async function (user){
    await updateDoc(doc(db, "Tables", user.table), {
      Seated: arrayRemove({
        name: user.name,
        status: user.status,
        duration: user.duration
      })
    })
  }
};
