<?php 
function readFoldersAndFiles($directory) {
// Scandir will scan a directory and return all files in said directory
$files = scandir($directory);
// Loop over $files array and print to terminal
foreach($files as $file) {
    if($file[0] === '.') continue;
    // Check if file is a directory, if so...call function recursively until we hit the bottom.
    if(is_dir($directory . '/' . $file)) {
        echo "$file - Directory";
        echo "\n";
        readFoldersAndFiles($directory . '/' . $file);
    }
    else {
        print_r($file);
        echo "\n";  
    }
};
}
// readFoldersAndFiles('../');
/* -------------------------
   Simple function to read a file
*/
function read_File($file) {
    $openedFile = fopen($file, 'r');
    // Loop the $openedFile until we've hit the end of the file
    while(!feof($openedFile)) {
        $fileLine = fgets($openedFile);
        print_r($fileLine);
    }
    echo "\n";
    echo "\n";
    echo "End of File!";
}
// read_File("../Utility/validDate.php");
/* Other functions to read files into either a string or an array */
function read_file_into_string($file) : string {
    $file_as_string = file_get_contents($file);
    echo $file_as_string;
    return $file_as_string;
}
// read_file_into_string("../Utility/validDate.php");
function read_file_into_array($file) : array {
    $file_as_array = file($file);
    print_r($file_as_array);
    return $file_as_array;
}
// read_file_into_array("../Utility/validDate.php");

// =====================================================
function write_to_file($file) {
    print_r(file_get_contents($file));
    $new_file = fopen($file, 'w');
    fwrite($new_file, "echo 'Just wrote to the file!'");
    fclose($new_file);
    print_r(file_get_contents($file));
}
// write_to_file("../Utility/validDate.php");
