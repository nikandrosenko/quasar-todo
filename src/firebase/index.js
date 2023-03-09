import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYPP9L-8fEEDmxS-8aK7dpE57JsYF_uWE",
  authDomain: "q-todo-ea117.firebaseapp.com",
  projectId: "q-todo-ea117",
  storageBucket: "q-todo-ea117.appspot.com",
  messagingSenderId: "54590649524",
  appId: "1:54590649524:web:c14ffac4add747b75353e1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
