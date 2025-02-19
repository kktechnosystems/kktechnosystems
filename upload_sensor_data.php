	<?php
	// Optional: Use a database to store the data
	$servername = "localhost";
	$username = "your_db_username";
    	$password = "your_db_password";
	$dbname = "your_db_name";
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}
	
	// Get sensor data from POST
	$sensor_data = $_POST['sensor_data'];
	
	if (!empty($sensor_data)) {
	    // Insert data into the database
	    $sql = "INSERT INTO sensor_table (data, timestamp) VALUES ('$sensor_data', NOW())";
        	
	    if ($conn->query($sql) === TRUE) {
	        echo "Data received and saved successfully";
	    } else {
	        echo "Error: " . $conn->error;
	    }
} else {
	    echo "No data received";
	}
	
	$conn->close();
	?>
