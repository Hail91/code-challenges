<?php
function get_people() {
    // Bring in connection (connection file contains PDO object and database connection)
    include 'connection.php';
    // prepared SQL statement assigned to statement variable
    $stmt = $db->prepare("SELECT * FROM people ORDER BY last_name DESC");
    // Execute the statement
    $stmt->execute();
    // Return an associative array of all results (Key:value pair array)
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}