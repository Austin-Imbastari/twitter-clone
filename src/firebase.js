import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1gCoov6ZsnN2AWsbhLR4TeYSfWPqB0YI",
    authDomain: "twitter-clone-86330.firebaseapp.com",
    projectId: "twitter-clone-86330",
    storageBucket: "twitter-clone-86330.appspot.com",
    messagingSenderId: "873486844287",
    appId: "1:873486844287:web:3456d271be0f0993d3da4a",
    measurementId: "G-1N6VG8NFGQ",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
