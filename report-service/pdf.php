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

$wiersz = pg_fetch_array ($wynik, 0, PGSQL_ASSOC);

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
$pdf->SetFont('dejavusans', '', 10, '', true);

// Add a page
// This method has several options, check the source code documentation for more information.
$pdf->AddPage();

// set text shadow effect
$pdf->setTextShadow(array('enabled'=>true, 'depth_w'=>0.2, 'depth_h'=>0.2, 'color'=>array(196,196,196), 'opacity'=>1, 'blend_mode'=>'Normal'));

// Set some content to print
$html = <<<EOD
<table border="1" style="padding: 3px;">
    <tr>
        <td width="80%"><b>Zbiorcze zestawienie informacji o zakresie korzystania ze środowiska oraz o wysokości należnych opłat<sup>1)</sup></b></td>
        <td width="20%"><b>rok<sup>2)</sup>:</b></td>
    </tr>
    <tr>
        <td colspan="2" align="center"><b><i>Podmiot korzystający ze środowiska</i></b></td>
    </tr>
    <tr>
        <td width="50%">Nazwa: $wiersz[longname]</td>
        <td width="50%">Adres: $wiersz[street] $wiersz[house_nr] $wiersz[flat_nr] $wiersz[postal_code] $wiersz[city]</td>
    </tr>
    <tr>
        <td width="50%">REGON: $wiersz[regon] </td>
        <td width="50%">Telefon/faks: $wiersz[fax]
        <br>Adres e-mail: $wiersz[email]</td>
    </tr>
</table>
EOD;

// Print text using writeHTMLCell()
$pdf->writeHTMLCell(0, 0, '', '', $html, 0, 1, 0, true, '', true);

// ---------------------------------------------------------

// Close and output PDF document
// This method has several options, check the source code documentation for more information.
$pdf->Output('wykaz'.date("YmdGi").'.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+