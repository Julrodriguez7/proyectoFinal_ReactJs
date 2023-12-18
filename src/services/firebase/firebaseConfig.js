import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7Z3Y1XtcFIeyUIbTcX67n5BJVJqe4Y-k",
  authDomain: "tienda-arrow-react.firebaseapp.com",
  projectId: "tienda-arrow-react",
  storageBucket: "tienda-arrow-react.appspot.com",
  messagingSenderId: "740063363880",
  appId: "1:740063363880:web:c2ca32885163f57e19061d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);