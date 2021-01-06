<?php 
// Scandir will scan a directory and return all files in said directory
$files = scandir('../');
// Loop over $files array and print to terminal
foreach($files as $file) {
    print_r($file);
    echo "\n";
};