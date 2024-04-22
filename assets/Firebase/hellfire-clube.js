import app from "./app.js"
import { getFirestore, collection, addDoc, getDocs} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

export async function subscribeToHellfireClub(subscription){
   const db =  getFirestore(app)
   const hellfireClubCollection = collection(db, 'hellfire-clube')
   const docRef = await addDoc(hellfireClubCollection, subscription)
   return docRef.id

} 

export async function getHellfireClubSubscription() {
    const db =  getFirestore(app)
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection)
    const subscription = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscription;
 
 }