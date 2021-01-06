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
// Call function
readFoldersAndFiles('../');