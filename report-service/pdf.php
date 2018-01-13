<?php

$company_id = $_GET["company"];
$period_id = $_GET["period"];
$voivodship_id = $_GET["voivodship"];
error_reporting(0);
$year = date("Y");

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
  $i = 0;
  $company = array();
  $wiersz = pg_fetch_array ($wynik, 0, PGSQL_ASSOC);
  foreach ($wiersz as $key => $value) {
    $company[$i][$key] = $value;
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
  $charge = array();
  while($wiersz2 = pg_fetch_array ($wynik2, $i, PGSQL_ASSOC)) {
    foreach ($wiersz2 as $key => $value) {
        $charge[$i][$key] = $value;
    }
    $i++;
  }

  $charge_floor = floor($charge[0]['charge']);
  if($charge[0]['charge']>800) $fee_sum = $charge[0]['charge'];
  else $fee_sum = 0;

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
  $j = 0;
  $z = 0;
  $silniki_spalinowe_sum = 0.0;
  $kotly_sum = 0;
  $fee = array();
  $euro1 = array();
  $euro5 = array();
  while($wiersz3 = pg_fetch_array ($wynik3, $i, PGSQL_ASSOC)) {
    foreach ($wiersz3 as $key => $value) {
      $fee[$i][$key] = $value;
      if($fee[$i]['number'] == 6)
        $silniki_spalinowe_sum = $silniki_spalinowe_sum + floatval($fee[$i]['fee_sum']);
    }
    $i++;
  }
}

function buduj_tabele_d($fee) {
    $html = "";
    foreach ($fee as $key => $value) {
        $html = $html.'<tr><td>'.$value['number']."</td><td>".$value['long_desc']."</td><td>".$value['description']."</td><td>".$value['converted']."</td><td>".$value['fee']."</td><td>".$value['fee_sum']."</td></tr>";
    }
    return $html;
}

//var_dump($wiersz);

require_once('TCPDF/tcpdf.php');

// create new PDF document
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Rafał Wojciechowicz');
$pdf->SetTitle('Wykaz');
$pdf->SetSubject('Wykaz');
$pdf->SetKeywords('Opłaty środowiskowe');

// set default header data
//$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.' 001', PDF_HEADER_STRING, array(0,64,255), array(0,64,128));
$pdf->setFooterData(array(0,64,0), array(0,64,128));

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
	require_once(dirname(__FILE__).'/lang/eng.php');
	$pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set default font subsetting mode
$pdf->setFontSubsetting(true);

// Set font
// dejavusans is a UTF-8 Unicode font, if you only need to
// print standard ASCII chars, you can use core fonts like
// helvetica or times to reduce file size.
$pdf->SetFont('dejavusans', '', 9, '', true);

// Add a page
// This method has several options, check the source code documentation for more information.
$pdf->AddPage();

// set text shadow effect
$pdf->setTextShadow(array('enabled'=>true, 'depth_w'=>0.2, 'depth_h'=>0.2, 'color'=>array(196,196,196), 'opacity'=>1, 'blend_mode'=>'Normal'));

// Set some content to print
$html = <<<EOD
WYKAZ ZAWIERAJĄCY ZBIORCZE ZESTAWIENIE INFORMACJI O ZAKRESIE KORZYSTANIA ZE ŚRODOWISKA ORAZ O WYSOKOŚCI NALEŻNYCH OPŁAT <br>
<table border="1" style="padding: 2px;" align="center">
    <tr>
        <td width="80%"><b>Zbiorcze zestawienie informacji o zakresie korzystania ze środowiska oraz o wysokości należnych opłat<sup>1)</sup></b></td>
        <td width="20%"><b>rok<sup>2)</sup>:</b>$year</td>
    </tr>
    <tr>
        <td colspan="2" align="center"><b><i>Podmiot korzystający ze środowiska</i></b></td>
    </tr>
    <tr>
        <td width="50%">Nazwa: {$company[0][longname]}</td>
        <td width="50%">Adres: {$company[0][street]} {$company[0][house_nr]} {$company[0][flat_nr]} {$company[0][postal_code]} {$company[0][city]}</td>
    </tr>
    <tr>
        <td width="50%">REGON: {$company[0][regon]} </td>
        <td width="50%">Telefon/faks: {$company[0][fax]}
        <br>Adres e-mail: {$company[0][email]}</td>
    </tr>
    <tr>
        <td width="10%">Lp.</td>
        <td width="50%">Rodzaj korzystania ze środowiska</td>
        <td width="10%">Kod tabeli</td>
        <td width="30%">Wysokość opłaty [zł]</td>
    </tr>
    <tr>
        <td width="10%">1</td>
        <td width="90%">Wprowadzanie gazów lub pyłów do powietrza</td>
    </tr>
    <tr>
        <td width="10%">1.1</td>
        <td width="50%">Źródła powstawania substancji wprowadzanych do powietrza</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">1.2</td>
        <td width="50%">Przeładunek benzyn silnikowych</td>
        <td width="10%">B</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">1.3</td>
        <td width="50%">Kotły o nominalnej mocy cieplnej do 5MW opalane węglem kamiennym,
        koksem, drewnem, olejem, lub paliwem gazowym, dla których nie jest
        wymagane pozwolenie na wprowadzanie gazów lub pyłów do powietrza albo
        pozwolenie zintegrowane</td>
        <td width="10%">C</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">1.4</td>
        <td width="50%">Silniki spalinowe</td>
        <td width="10%">D</td>
        <td width="30%">{$silniki_spalinowe_sum}</td>
    </tr>
    <tr>
        <td width="10%">1.5</td>
        <td width="50%">Chów lub hodowla drobiu</td>
        <td width="10%">E</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">I</td>
        <td width="60%">Wysokość opłaty za wprowadzanie gazów lub pyłów do powietrza ogółem</td>
        <td width="30%">{$charge_floor}</td>
    </tr>
    <tr>
        <td width="10%">2</td>
        <td width="90%">Pobór wód</td>
    </tr>
    <tr>
        <td width="10%">2.1</td>
        <td width="50%">Woda podziemna</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">2.2</td>
        <td width="50%">Woda powierzchniowa śródlądowa</td>
        <td width="10%">B</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">2.3</td>
        <td width="50%">Morskie wody wewnętrzne</td>
        <td width="10%">C</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">II</td>
        <td width="60%">Wysokość opłaty za pobór wód ogółem</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3</td>
        <td width="90%">Wprowadzanie ścieków do wód lub do ziemi</td>
    </tr>
    <tr>
        <td width="10%">3.1.1</td>
        <td width="50%">Ścieki o kodzie a</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.1.2</td>
        <td width="50%">Ścieki o kodzie b</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.1.3</td>
        <td width="50%">Ścieki o kodzie c</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.1.4</td>
        <td width="50%">Ścieki o kodzie d</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.1.5</td>
        <td width="50%">Ścieki rolniczo wykorzystane</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.2</td>
        <td width="50%">Wody wykorzystane, odprowadzane z obiektów chowu lub hodowli ryb łososiowatych</td>
        <td width="10%">B</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.3</td>
        <td width="50%">Wody opadowe lub roztopowe pochodzące z powierzchni zanieczyszczonych o twałej nawierzchni, ujęte w otwarte lub zamknięte systemy kanalizacyjne, z wyjątkiem kanalizacji ogólnospławnej
        </td>
        <td width="10%">C</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.4</td>
        <td width="50%">Wody zasolone</td>
        <td width="10%">D</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">3.5</td>
        <td width="50%">Wody wykorzystane, odprowadzane z obiektów chowu lub hodowli ryb innych niż łososiowate lub innych organizmów wodnych</td>
        <td width="10%">E</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">III</td>
        <td width="60%">Wysokość opłaty za wprowadzenie ścieków do wód lub do ziemi ogółem</td>
        <td width="30%"></td>
    </tr>
        <tr>
        <td width="10%">4</td>
        <td width="90%">Składowanie odpadów</td>
    </tr>
    <tr>
        <td width="10%">4.1</td>
        <td width="50%">Odpady składowane selektywnie</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">4.2</td>
        <td width="50%">Odpady składowane nieselektywnie</td>
        <td width="10%">A</td>
        <td width="30%"></td>
    </tr>
    <tr>
        <td width="10%">IV</td>
        <td width="60%">Wysokość opłaty za składowanie odpadów ogółem</td>
        <td width="30%"></td>
    </tr>
</table>
<br><br>
<table border="1" style="padding: 2px;" align="center">
    <tr>
        <td width="70%">Suma opłat ogółem [zł]</td>
        <td width="30%">{$fee_sum}</td>
    </tr>
</table>
EOD;

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);

// Set some content to print
$html = <<<EOD
Pouczenie: Zawarte w wykazie informacje o wysokości należnych opłat stanowią podstawę do wystawienia tytułu wykonawczego, zgodnie z przepisami ustawy z dnia 17 czerwca 1966 r. o postępowaniu egzekucyjnym w administracji (Dz. U. z 2012 r. poz. 1015, z późn. zm.).
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<table border="0" align="center">
<tr><td width="20%">....................</td><td width="30%">........................................</td><td width="50%">............................................................</td></tr>
<tr><td width="20%">(data)</td><td width="30%">(podpis osoby wypełniającej)</td><td width="50%">(podpis osoby upoważnionej do reprezentowania podmiotu korzystającego ze środowiska)</td></tr>
</table>
EOD;

$pdf->AddPage();

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);

$tabela_d = buduj_tabele_d($fee);

// Set some content to print
$html = <<<EOD
WYKAZ ZAWIERAJĄCY INFORMACJE O ILOŚCI I RODZAJACH GAZÓW LUB PYŁÓW WPROWADZANYCH DO POWIETRZA, DANE, NA PODSTAWIE KTÓRYCH OKREŚLONO TE ILOŚCI, ORAZ INFORMACJE O WYSOKOŚCI NALEŻNYCH OPŁAT<br>
<table border="1" style="padding: 2px;" align="center">
    <tr>
        <td width="70%">Wprowadzanie gazów lub pyłów do powietrza</td>
        <td width="30%">rok: $year</td>
    </tr>
    <tr>
        <td width="30%">Podmiot korzystający ze środowiska</td>
        <td rowspan="1000" width="20%"> Miejsce/miejsca korzystania ze środowiska</td>
        <td rowspan="1000" width="50%">
            <table border="1" style="padding: 2px;" align="center">
                <tr>
                    <td>Lp.</td>
                    <td>Adres</td>
                    <td>Gmina</td>
                    <td>Powiat</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>testowa 18</td>
                    <td>poznan</td>
                    <td>poznan</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td width="15%">Nazwa: {$company[0][longname]}</td>
        <td width="15%">Adres: {$company[0][street]} {$company[0][house_nr]} {$company[0][flat_nr]} {$company[0][postal_code]} {$company[0][city]}</td>
    </tr>
    <tr>
        <td width="15%">REGON: {$company[0][regon]} </td>
        <td width="15%">Telefon/faks: {$company[0][fax]}
        <br>Adres e-mail: {$company[0][email]}</td>
    </tr>
</table>
Tabela D<br>
<table border="1" style="padding: 2px;" align="center">
    <tr>
        <td>Wprowadzenie gazów lub pyłów do powietrza z procesów spalania paliw w silnikach spalinowych</td>
    </tr>
    <tr>
        <td width="5%">Lp.</td>
        <td width="35%">Rodzaj silnika spalinowego</td>
        <td width="15%">Rodzaj paliwa</td>
        <td width="15%">Zużycie paliwa [Mg]</td>
        <td width="15%">Jednostkowa stawka opłaty [zł/Mg]</td>
        <td width="15%">Wysokość opłaty [zł]</td>
    </tr>
    <tr>
        <td width="5%">1</td>
        <td width="35%">2</td>
        <td width="15%">3</td>
        <td width="15%">4</td>
        <td width="15%">5</td>
        <td width="15%">6</td>
    </tr>
    {$tabela_d}
    <tr>
        <td width="85%">Wysokość opłaty ogółem [zł]</td>
        <td width="15%">{$charge[0]['charge']}</td>
    </tr>
</table>
<br><br>
Pouczenie: Zawarte w wykazie informacje o wysokości należnych opłat stanowią podstawę do wystawienia tytułu wykonawczego, zgodnie z przepisami ustawy z dnia 17 czerwca 1966 r. o postępowaniu egzekucyjnym w administracji (Dz. U. z 2012 r. poz. 1015, z późn. zm.).
<br><br><br><br><br>
<table border="0" align="center">
<tr><td width="20%">....................</td><td width="30%">........................................</td><td width="50%">............................................................</td></tr>
<tr><td width="20%">(data)</td><td width="30%">(podpis osoby wypełniającej)</td><td width="50%">(podpis osoby upoważnionej do reprezentowania podmiotu korzystającego ze środowiska)</td></tr>
</table>
EOD;

$pdf->AddPage('L');

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);

// ---------------------------------------------------------

// Close and output PDF document
// This method has several options, check the source code documentation for more information.
$pdf->Output('wykaz'.date("YmdGi").'.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+