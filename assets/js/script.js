
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
<script>
const firebaseConfig = {
    apiKey : "AIzaSyBEdHO37FRCoSKcGHjGRJ2Jt2WfM0Nddb4",
    authDomain: "water-level-monitoring-s-25c8f.firebaseapp.com",
    databaseURL: "https://water-level-monitoring-s-25c8f-default-rtdb.firebaseio.com",
    projectId: "water-level-monitoring-s-25c8f",
    storageBucket: "water-level-monitoring-s-25c8f.firebasestorage.app",
    messagingSenderId: "397671626591",
    appId: "1:397671626591:web:b7387fdc03171a30b3e8ea"
  }
  
  
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database
const database = getDatabase(app);

// Create a reference to the 'waterLevel' node in the database
const waterLevelRef = ref(database, 'waterLevel');

// Function to fetch and display water level data
function getWaterLevelData() {
  // Use `onValue` to listen for changes in the waterLevel data
  onValue(waterLevelRef, (snapshot) => {
    const data = snapshot.val();  // Get the value of the data
    document.getElementById('water-level').innerText = `Water Level: ${data} cm`;
  })
}

// Call the function to fetch the data
getWaterLevelData();

</script>