<?php
// Function to open and parse a CSV file with PHP
function open_csv($csv) {
    $csvHeaders = fgetcsv($csv);
    var_dump($csvHeaders);
    // Can then loop over each row in CSV and print results
}
echo open_csv("csv here");