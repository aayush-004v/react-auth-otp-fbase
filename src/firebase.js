import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGmdgyV9nAaBe_TopE3g1faQDeYEYJmfA",
  authDomain: "phone-auth-41745.firebaseapp.com",
  projectId: "phone-auth-41745",
  storageBucket: "phone-auth-41745.appspot.com",
  messagingSenderId: "160612540073",
  appId: "1:160612540073:web:b9464d9fe2c699247713b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
