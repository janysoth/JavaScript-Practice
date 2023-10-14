import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN1myM9SyAE7u-ywI7WDh2Z2OTgztF2N4",
  authDomain: "vue-full-course-3f703.firebaseapp.com",
  projectId: "vue-full-course-3f703",
  storageBucket: "vue-full-course-3f703.appspot.com",
  messagingSenderId: "580420744869",
  appId: "1:580420744869:web:042ce97e23bb65386f3f4c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
firebase.auth();

export default firebase;