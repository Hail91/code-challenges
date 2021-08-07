<?php
function valid_sql_date($date) {
  // Split the date on hyphens (e.g 1994-10-02)
  $splitDate = explode("-", $date);
  // Loop over that array 
  for($i = 0; $i < count($splitDate); $i++) {
    // Check each value for truthiness
    $i == 0 && $splitDate[$i] == 4 && $i == 1 && $splitDate[$i] == 2 && $i == 2 && $splitDate[$i] == 2 ? true : false; 
  }
  // Pass the dates into the checkdate PHP method
  if(checkdate($splitDate[1], $splitDate[2], $splitDate[0])) {
    // Return true if it's valid
    return true;
  }
  // Otherwise return false
  else return false;
}
// Echo output
echo valid_sql_date("1999-04-34"); // Would return nothing/falsy because April does not have 34 days