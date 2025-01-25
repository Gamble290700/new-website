
// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAAnl-WOPdEa4krtCXzrv3RCSRZ_sgbGw4",
  authDomain: "counter-9a692.firebaseapp.com",
  databaseURL: "https://counter-9a692-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "counter-9a692",
  storageBucket: "counter-9a692.firebasestorage.app",
  messagingSenderId: "823810182549",
  appId: "1:823810182549:web:984de14979fc6160743a9c",
  measurementId: "G-50GVEHV7SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Get references to the DOM elements
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

// Reference to the counter value in Firebase
const counterRef = ref(database, 'counter');

// Set initial counter value to 0 if it doesn't exist
set(counterRef, 0); // This ensures the counter starts with 0

// Fetch the current counter value from Firebase
onValue(counterRef, (snapshot) => {
  const counterValue = snapshot.val();
  counterElement.innerText = counterValue !== null ? counterValue : 0;
});

// Update counter in Firebase
function updateCounter(newValue) {
  set(counterRef, newValue);
}

// Event listeners for buttons
incrementButton.addEventListener("click", () => {
  const currentValue = parseInt(counterElement.innerText) || 0;
  updateCounter(currentValue + 1);
});

decrementButton.addEventListener("click", () => {
  const currentValue = parseInt(counterElement.innerText) || 0;
  updateCounter(currentValue - 1);
});
