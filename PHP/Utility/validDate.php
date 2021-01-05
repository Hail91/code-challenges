<?php
function valid_sql_date($date) {
  $splitDate = explode("-", $date);
  for($i = 0; $i < count($splitDate); $i++) {
    $i == 0 && $splitDate[$i] == 4 && $i == 1 && $splitDate[$i] == 2 && $i == 2 && $splitDate[$i] == 2 ? true : false; 
  }
  if(checkdate($splitDate[1], $splitDate[2], $splitDate[0])) {
    return true;
  }
  else return false;
  return true;
}

echo valid_sql_date("1999-04-30");