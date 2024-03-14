<?php
include('/home/grupofirstrh/public_html/portal/session/local_functions.php');
require('../../fpdf183/fpdf.php');
$infoUser = infoUser($_SESSION['printFolhaPonto']['login']);

include('/home/grupofirstrh/data/connectionSelect.php');
$query = "SELECT * FROM tbl_ponto WHERE chapa = ? ORDER BY Id DESC LIMIT 1";
$st = $db->prepare($query);
$st->execute([$infoUser['chapa']]);
$tabelaPontoInfo = $st->fetch(PDO::FETCH_ASSOC);
$st = null;
$db = null;

// print_r2($tabelaPontoInfo);
$periodo = $_SESSION['printFolhaPonto']['periodo'];
$periodoArray = explode('-', $periodo);
class PDF extends FPDF
{
    function Header()
    {
        $this->SetTopMargin(0);
    }
    //Page footer
    function Footer()
    {
        $this->SetY(-35);
        $this->SetFont('Arial', 'B', 11);
        $altura = 4;
        $texto = utf8_decode('IMPORTANTES INSTRUÇÕES:');
        $larguraTexto = $this->GetStringWidth($texto);
        $bordas = 'B';
        $this->Cell(($larguraTexto + 2), $altura, $texto, $bordas, 1, 'L');
        $bordas = 0;
        $this->SetFont('Arial', '', 11);
        $this->Ln(1.5);
        $altura = 6;
        $this->Cell(0, $altura, utf8_decode('1 - Não rasurar, rabiscar ou utilizar corretivos.'), $bordas, 1, 'L');
        $this->MultiCell(0, $altura, utf8_decode('2 - Para ser válida, a folha de ponto DEVE NECESSARIAMENTE ser assinada (1) pelo FUNCIONÁRIO e (2) pelo SUPERVISOR ou GESTOR DIRETO.'), $bordas, 'L');
        $this->Cell(0, $altura, utf8_decode('3 - O horário deve corresponder à efetiva entrada e saída do funcionário.'), $bordas, 1, 'L');
    }
}
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage('P', 'A4');
$nomeArquivo = "Folha de Ponto";
$pdf->SetTitle($nomeArquivo, true);
$pdf->SetSubject($nomeArquivo, true);
$width = $pdf->GetPageWidth();
$margins['left'] = 10;
$margins['right'] = 10;
$netWidth = $pdf->GetPageWidth() - array_sum($margins);
$pdf->SetFont('Arial', '', 9);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetRightMargin($margins['right']);
$pdf->SetTopMargin(0);

$bordas = 0;
$pdf->Image('https://grupofirstrh.com.br/controles_img/firstrh_group_logo-en.png', 10, 6, 30, 0);
$pdf->Ln(8);
$pdf->SetFont('Arial', 'B', 14);
$pdf->Cell(($netWidth / 2), 7, 'FOLHA DE PONTO INDIVIDUAL', $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 7, utf8_decode(ajustaNome($infoUser['empregadorNome'])), $bordas, 1, 'R');
$pdf->SetFont('Arial', '', 11);
$pdf->Cell(($netWidth / 2), 5, utf8_decode('(Ref. ' . nomeMes($periodoArray[1]) . '/' . $periodoArray[0] . ')'), $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 5, 'CNPJ n. ' . $infoUser['CNPJFilial'], $bordas, 1, 'R');
$pdf->Ln(1.5);

$pdf->SetFont('Arial', 'B', 12);
$altura = 6;
$bordas = 0;
$pdf->Cell(15, $altura, 'Nome:', $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 11);
$ordenate[1] = floatVal($pdf->GetY());
$larguraDireita = 30;
$larguraNome = ($netWidth / 2 + $larguraDireita);
$pdf->MultiCell($larguraNome, $altura, utf8_decode(ajustaNome($infoUser['name']) . ' (CPF ' . print_cpf($infoUser['CPF']) . ')'), $bordas, 'L');
$ordenate[2] = $pdf->GetY();
$pdf->SetY($ordenate[1]);
$pdf->SetX((($larguraNome + 5 + $margins['left']) * 1));
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell(15, $altura, 'CTPS:', $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 11);
$pdf->MultiCell(0, $altura, utf8_decode($tabelaPontoInfo['ctps'] . '/' . $tabelaPontoInfo['serie_ctps']), $bordas, 'L');

$pdf->SetX((($larguraNome + 5 + $margins['left']) * 1));
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell(15, $altura, 'Chapa:', $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 11);
$pdf->MultiCell(0, $altura, utf8_decode($infoUser['chapa']), $bordas, 'L');

$pdf->SetX($margins['left']);
$pdf->SetY($ordenate[2]);
$pdf->SetFont('Arial', 'B', 11);
$texto = 'Local:';
$larguraTexto = $pdf->GetStringWidth($texto);
$pdf->Cell(($larguraTexto + 1), $altura, utf8_decode($texto), $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 11);
$pdf->MultiCell(((($netWidth / 2 + $larguraDireita) - ($larguraTexto + 1))), $altura, utf8_decode($infoUser['tomador']), $bordas, 'L');

$pdf->SetFont('Arial', 'B', 11);
$texto = 'Horário de Trabalho:';
$larguraTexto = $pdf->GetStringWidth($texto);
$pdf->Cell(($larguraTexto), $altura, utf8_decode($texto), $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 11);
$pdf->MultiCell(0, $altura, utf8_decode(preg_replace('/^(HOR: )/', '', $tabelaPontoInfo['desc_horario'])), $bordas, 'L');
$pdf->Ln(1);
$largura = $netWidth / 8;
$altura = 10;
$pdf->SetFont('Arial', 'B', 12);
$bordas = 'TLB';
$ordenate = $pdf->GetY();
$pdf->Cell($largura, $altura, utf8_decode('Dia'), $bordas, 0, 'C');
$pdf->SetFillColor(171, 253, 190);
$pdf->MultiCell($largura, ($altura / 2), utf8_decode('Horário Entrada'), $bordas, 'C', true);
$pdf->SetY($ordenate);
$pdf->SetX(($largura * 2) + $margins['left']);
$pdf->SetFillColor(222, 222, 222);
$pdf->MultiCell($largura, ($altura / 2), utf8_decode('Início Intervalo'), $bordas, 'C', true);
$pdf->SetY($ordenate);
$pdf->SetX(($largura * 3) + $margins['left']);
$pdf->MultiCell($largura, ($altura / 2), utf8_decode('Retorno Intervalo'), $bordas, 'C', true);
$pdf->SetY($ordenate);
$pdf->SetX(($largura * 4) + $margins['left']);
$pdf->SetFillColor(255, 131, 143);
$pdf->MultiCell($largura, ($altura / 2), utf8_decode('Horário Saída'), $bordas, 'C', true);
$pdf->SetY($ordenate);
$pdf->SetX(($largura * 5) + $margins['left']);
$pdf->SetFillColor(255, 193, 7);
$pdf->MultiCell($largura, ($altura / 2), utf8_decode('Início Hora Extra'), $bordas, 'C', true);
$pdf->SetY($ordenate);
$pdf->SetX(($largura * 6) + $margins['left']);
$pdf->MultiCell($largura, ($altura / 2), utf8_decode('Saída Hora Extra'), $bordas, 'C', true);
$bordas = 'TLBR';
$pdf->SetY($ordenate);
$pdf->SetX(($largura * 7) + $margins['left']);
$pdf->Cell(0, $altura, utf8_decode('Rubrica'), $bordas, 1, 'C');

// $periodo = '2021-01-01';
$quantosDias = date('t', strtotime($periodo));
$dia = 1;
$altura = 5.6;
$pdf->SetFont('Arial', '', 11);
$periodo = strtotime("$periodo + 0 day");
while ($dia <= $quantosDias && $dia < 32) {
    $bordas = 'TLR';
    if ($dia == $quantosDias) {
        $bordas = 'TLBR';
    }
    $diaSemana = date('N', $periodo);
    if (in_array($diaSemana, ['6', '7'])) {
        $pdf->SetFillColor(230, 230, 230);
    } else {
        $pdf->SetFillColor(255, 255, 255);
    }
    if ($diaSemana == 6) {
        $expressaoDia = date('d-m', $periodo) . ', ' . substr(diaSemana2($diaSemana), 0, 4);
    } else {
        $expressaoDia = date('d-m', $periodo) . ', ' . substr(diaSemana2($diaSemana), 0, 3);
    }
    $periodo = strtotime(date('Y-m-d', $periodo) . " + 1 day");
    $ordenate = $pdf->GetY();
    $pdf->Cell($largura, $altura, utf8_decode($expressaoDia), $bordas, 0, 'L', true);
    $pdf->SetFillColor(171, 253, 190);
    $pdf->MultiCell($largura, $altura, ':', $bordas, 'C');
    $pdf->SetY($ordenate);
    $pdf->SetX(($largura * 2) + $margins['left']);
    $pdf->SetFillColor(222, 222, 222);
    $pdf->MultiCell($largura, $altura, ':', $bordas, 'C');
    $pdf->SetY($ordenate);
    $pdf->SetX(($largura * 3) + $margins['left']);
    $pdf->MultiCell($largura, $altura, ':', $bordas, 'C');
    $pdf->SetY($ordenate);
    $pdf->SetX(($largura * 4) + $margins['left']);
    $pdf->SetFillColor(255, 131, 143);
    $pdf->MultiCell($largura, $altura, ':', $bordas, 'C');
    $pdf->SetY($ordenate);
    $pdf->SetX(($largura * 5) + $margins['left']);
    $pdf->SetFillColor(255, 193, 7);
    $pdf->MultiCell($largura, $altura, ':', $bordas, 'C');
    $pdf->SetY($ordenate);
    $pdf->SetX(($largura * 6) + $margins['left']);
    $pdf->MultiCell($largura, $altura, ':', $bordas, 'C');
    $pdf->SetY($ordenate);
    $pdf->SetX(($largura * 7) + $margins['left']);
    $pdf->Cell(0, $altura, '', $bordas, 1, 'C');
    $dia++;
}
$pdf->Ln(3.6);
$altura = 25;
$bordas = 0;
$separador = 15;
$pdf->SetFont('Arial', '', 12);
$largura = (($netWidth / 2) - $separador);
$pdf->Cell($largura, $altura, utf8_decode('Assinatura do Funcionário'), $bordas, 0, 'C');
$pdf->Cell($separador, $altura, '', $bordas, 0, 'C');
$pdf->Cell(0, $altura, utf8_decode('Assinatura do Supervisor/Gestor'), $bordas, 1, 'C');
$ordenate = $pdf->GetY();
$inicial = 15;
$pdf->Line($inicial, ($ordenate - 15), ($inicial + $largura - 15), ($ordenate - 15));
$inicial = $largura + $separador + 25;
$pdf->Line($inicial, ($ordenate - 15), ($inicial + $largura - 15), ($ordenate - 15));
$pdf->Output();
// unset($_SESSION['printFolhaPonto']);
