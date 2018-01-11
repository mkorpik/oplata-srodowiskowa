<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pl">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

  <title>Report service</title>
</head>
<body>
<?php
//error_reporting(0);

$company_id = $_GET["company"];
$period_id = $_GET["period"];
$voivodship_id = $_GET["voivodship"];

if($company_id == "" || $period_id == "" || $voivodship_id == "")
echo "błąd danych";
else {
  // Nawiązanie połączenia, wybór bazy danych
  $dbconn = pg_connect("host=sql.eko-soft.nazwa.pl port=5432 dbname=eko-soft_4 user=eko-soft_4 password=Oplaty_inz_2017")
  or die('Nie można nawiązać połączenia: ' . pg_last_error());

  // COMPANY INFO
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
  echo "COMPANY: <BR>";
  $wiersz = pg_fetch_array ($wynik, 0, PGSQL_ASSOC);
  foreach ($wiersz as $key => $value) {
    echo "<b>$key</b> $value <br>";
  }

  // CHARGE
  $wynik2 = pg_query($dbconn, '
  SELECT
  SUM(mobile_fee) as charge  
  FROM 
  mobile_data md
  LEFT JOIN company c ON c.id=md.company_id
  WHERE
  md.period_id='.$period_id.' AND  
  md.company_id='.$company_id.' AND
  c.voivodship_id='.$voivodship_id.'');
  if (!$wynik) {
    echo "Wystąpił błąd.\n";
    exit;
  }
  echo "CHARGE: <BR>";
  $wiersz2 = pg_fetch_array ($wynik2, 0, PGSQL_ASSOC);
  foreach ($wiersz2 as $key => $value) {
    echo "<b>$key</b> $value <br>";
  }
}

?>
</body>
</html>