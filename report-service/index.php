<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pl">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

  <title>Report service</title>
</head>
<body>
<?php

$company_id = $_GET["company"];
// Nawiązanie połączenia, wybór bazy danych
$dbconn = pg_connect("host=sql.eko-soft.nazwa.pl port=5432 dbname=eko-soft_4 user=eko-soft_4 password=Oplaty_inz_2017")
or die('Nie można nawiązać połączenia: ' . pg_last_error());

$wynik = pg_query($dbconn, '
SELECT 
"street", "house_nr", 
CASE "flat_nr"
WHEN \'\' THEN \'\'
ELSE \'/\'||"flat_nr"
END AS "flat_nr",
"postal_code", "city",                        
"regon", "longname",
"phone" ||\' / \'|| "fax" as "fax",
"email"        
FROM "company" WHERE "id"='.$company_id.';');
if (!$wynik) {
  echo "Wystąpił błąd.\n";
  exit;
}

while ($wiersz = pg_fetch_row($wynik)) {
    echo "Ulica: $wiersz[0] <br /> Numer domu: $wiersz[1]";
    echo "<br />\n";
  }



?>
</body>
</html>