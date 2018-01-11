<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="pl">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

  <title>Report service</title>
</head>
<body>
<?php
error_reporting(0);

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
  SELECT DISTINCT
  SUM(mobile_fee) as charge  
  FROM 
  mobile_data md
  LEFT JOIN company c ON c.id=md.company_id
  WHERE
  md.period_id='.$period_id.' AND  
  md.company_id='.$company_id.' AND
  c.voivodship_id='.$voivodship_id.'');
  if (!$wynik2) {
    echo "Wystąpił błąd.\n";
    exit;
  }
  $i = 0;
  while($wiersz2 = pg_fetch_array ($wynik2, $i, PGSQL_ASSOC)) {
    echo " <BR>CHARGE: <BR>";
    foreach ($wiersz2 as $key => $value) {
      echo "<b>$key</b> $value <br>";
    }
    $i++;
  }

  // FEE
  $wynik3 = pg_query($dbconn, '
  SELECT me.id, me.number, me.long_desc, mf.description,mff.fee, sum(md.converted) converted, sum(md.mobile_fee) as fee_sum                        
  FROM 
    mobile_data md
  LEFT JOIN company c ON c.id=md.company_id
  LEFT JOIN mobile_engine me ON md.engine_id = me.id
  LEFT JOIN mobile_fuel mf ON md.fuel_id = mf.id
  LEFT JOIN mobile_fuel_fees mff ON mff.period_id='.$period_id.' and mff.engine_id = me.id and mff.fuel_id=mf.id
  WHERE
    md.period_id='.$period_id.' AND  
    md.company_id='.$company_id.' AND
    c.voivodship_id='.$voivodship_id.'
  GROUP BY me.id, me.number, me.long_desc, mf.description, mff.fee
  ORDER BY me.id, mf.description');
  if (!$wynik3) {
    echo "Wystąpił błąd.\n";
    exit;
  }

  $i = 0;
  while($wiersz3 = pg_fetch_array ($wynik3, $i, PGSQL_ASSOC)) {
    echo " <BR>FEE: <BR>";
    foreach ($wiersz3 as $key => $value) {
      echo "<b>$key</b> $value <br>";
    }
    $i++;
  }
}

?>
</body>
</html>