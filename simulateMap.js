// This script simulates what a user would see when they interact with one of the maps
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app Firebase configuration needed
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Simulate a user hovering over a map dot
async function simulateMapHover(docId) {
  const docRef = doc(db, "Environmentally Unstable Lands", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(`\n========== User hovered over: ${docId} ==========\n`);
    console.log(`Location: ${docSnap.data().location}`);
    console.log(`Historic Tribe(s): ${docSnap.data().historicTribe}`);
    console.log(`Current Owner: ${docSnap.data().currentOwner    }`);
    console.log(`Environmental Issues: ${docSnap.data().environmentalIssues}`);
    console.log("\n=========================================\n");
  } else {
    console.log("No such document found!");
  }
}

// Simulate user hovering over a dot on a map  location
simulateMapHover("Hanford Nuclear Site"); 