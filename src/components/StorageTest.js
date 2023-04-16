import {addDoc, collection, getFirestore} from "firebase/firestore";

function StorageTest({app}) {

    const db = getFirestore(app)
    try {
        const docRef = addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

    return (
        <p>testing</p>
    )
}

export default StorageTest;