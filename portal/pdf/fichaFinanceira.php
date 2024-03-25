<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('../session/local_functions.php');
require('../../fpdf185/fpdf.php');
$fichasFinanceiras = fichasFinanceirasPeriodo($_SESSION['printContraCheque']['login'], $_SESSION['printContraCheque']['periodo']);
// print_r2($fichasFinanceiras, __LINE__, __FILE__, __FUNCTION__);
$infoUser = infoUser([
    'cpf' => $_SESSION['printContraCheque']['login'],
    'chapa' => isset($fichasFinanceiras[0]) ? $fichasFinanceiras[0]['CHAPA'] : null,
]);
$periodoArray = explode('_', $_SESSION['printContraCheque']['periodo']);
class PDF extends FPDF
{
    function Header()
    {
        $this->SetLeftMargin(10);
        $this->SetRightMargin(10);
        //Logo
        if ($this->PageNo() > 1) {
            $this->SetFont('Arial', '', 8);
            $this->SetTextColor(0, 0, 0);
            $this->Cell(0, 4, utf8_decode('Pág. ') . $this->PageNo() . ' de {nb}', 0, 0, 'R');
        }
        $this->Image('../img/firstrh_group_logo-en.png', 15, 8, 0, 20);
        $this->Ln(20);
    }
}
// print_r2($infoUser, __LINE__, __FILE__, '');

$codColigada = isset($fichasFinanceiras[0]['COD_COLIGADA']) ? $fichasFinanceiras[0]['COD_COLIGADA'] : null;
$codFilial = isset($infoUser['COD_FILIAL']) ? $infoUser['COD_FILIAL'] : null;

$empregador = infoColigada([
    'coligada' => $codColigada,
    'filial' => $codFilial
]);
// print_r2($empregador, __LINE__, __FILE__, '');
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage('P', 'A4');
$nomeArquivo = "Contra-cheque";
$pdf->SetTitle($nomeArquivo, true);
$pdf->SetSubject($nomeArquivo, true);
$pdf->SetLeftMargin(10);
$pdf->SetRightMargin(10);
// $pdf->Image('img/firstrh_group_logo-en.png', 30, 10, 60, 0);
$pdf->SetFont('Arial', 'B', 18);
$pdf->Cell(0, 10, 'CONTRA-CHEQUE ONLINE', 0, 1, 'C');
$pdf->Ln(10);
$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(28, 7, utf8_decode('Funcionário:'), 0, 0, 'L');
$pdf->SetFont('Arial', '', 12);
$mes = isset($periodoArray[1]) ? nomeMes($periodoArray[1]) : '';
$ano = isset($periodoArray[0]) ? $periodoArray[0] : '';
$dia = isset($periodoArray[2]) ? $periodoArray[2] : '';
$pdf->Cell(47, 8, utf8_decode($mes) . '/' . $ano . ' - (' . $dia . ')', 'BL', 0, 'L');
$pdf->Ln(1);
$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(28, 7, 'Empregador:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 12);
$pdf->MultiCell(0, 7, isset($empregador['matriz']) && isset($empregador['CNPJ']) ? utf8_decode(ajustaNome($empregador['matriz']) . ' (CNPJ ' . $empregador['CNPJ'] . ')') : '', 0, 'L');
$pdf->Ln(1);
$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(28, 7, 'Tomador:', 0, 0, 'L');
$pdf->SetFont('Arial', '', 12);
$pdf->MultiCell(0, 7, isset($infoUser['tomador']) ? utf8_decode(ajustaNome($infoUser['tomador'])) : '', 0, 'L');
$pdf->Ln(3);
$width = $pdf->GetPageWidth();
$pdf->SetFont('Arial', 'B', 11);
$pdf->SetDrawColor(128, 128, 128);
$pdf->Cell(105, 8, 'Cargo | Departamento', 'TL', 0, 'L');
$pdf->Cell(47, 8, utf8_decode('Mês/Ano de Referência'), 'TL', 0, 'L');
$pdf->Cell(0, 8, utf8_decode('Data de Admissão'), 'TLR', 1, 'L');
$pdf->SetFont('Arial', '', 11);
$nomeFuncao = isset($infoUser['nomeFuncao']) ? ajustaNome($infoUser['nomeFuncao']) : '';
$departamentoNome = isset($infoUser['departamentoNome']) ? ajustaNome($infoUser['departamentoNome']) : '';

$pdf->Cell(105, 8, utf8_decode($nomeFuncao) . ' | ' . $departamentoNome, 'BL', 0, 'L');
$mes = isset($periodoArray[1]) ? nomeMes($periodoArray[1]) : '';
$ano = isset($periodoArray[0]) ? $periodoArray[0] : '';
$dia = isset($periodoArray[2]) ? $periodoArray[2] : '';
$dataAdmissao = isset($infoUser['data_admissao']) ? $infoUser['data_admissao'] : '';

$pdf->Cell(47, 8, utf8_decode($mes) . '/' . $ano . ' - (' . $dia . ')', 'BL', 0, 'L');
$pdf->Cell(0, 8, $dataAdmissao, 'BLR', 1, 'L');

$pdf->Ln(2);
$largura = $width / 3;
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell($largura, 8, 'PIS', 'TL', 0, 'L');
$pdf->Cell($largura, 8, utf8_decode('CTPS/Série/UF'), 'T', 0, 'L');
$pdf->Cell(0, 8, utf8_decode('Matrícula/Chapa'), 'TR', 1, 'L');
$pdf->SetFont('Arial', '', 11);
$pis = isset($infoUser['PIS']) ? $infoUser['PIS'] : '';

$pdf->Cell($largura, 8, utf8_decode($pis), 'BL', 0, 'L');
$ctps = isset($infoUser['CTPS']) ? $infoUser['CTPS'] : '';

$pdf->Cell($largura, 8, utf8_decode($ctps), 'B', 0, 'L');
$chapa = isset($infoUser['chapa']) ? $infoUser['chapa'] : '';

$pdf->Cell(0, 8, utf8_decode($chapa), 'BR', 1, 'L');

$dadosBancarios = [
    'banco' => (isset($infoUser['BANCO']) && $infoUser['BANCO'] != '' && $infoUser['BANCO'] != 0 ? 'Banco ' . $infoUser['BANCO'] : ''),
    'agencia' => (isset($infoUser['AGENCIA']) && $infoUser['AGENCIA'] != '' && $infoUser['AGENCIA'] != 0 ? 'Agência ' . $infoUser['AGENCIA'] : ''),
    'conta' => (isset($infoUser['CONTA']) && $infoUser['CONTA'] != '' && $infoUser['CONTA'] != 0 ? 'Conta ' . $infoUser['CONTA'] : '')
];
$dadosBancarios = array_filter($dadosBancarios);
if (count($dadosBancarios) > 0) {
    $dadosBancarios = implode(', ', $dadosBancarios);
} else {
    $dadosBancarios = 'Não informados';
}
$pdf->Ln(2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell(0, 8, utf8_decode('Dados Bancários'), 'TLR', 1, 'L');
$pdf->SetFont('Arial', '', 11);
$pdf->MultiCell(0, 8, utf8_decode($dadosBancarios), 'BLR', 'L');

$largura = 25;
$larguraCodigo = 20;
$larguraDescricao = ($width - 20) - $larguraCodigo - ($largura * 3);
$pdf->Ln(2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell($larguraCodigo, 8, utf8_decode('Código'), 'TBL', 0, 'L');
$pdf->Cell($larguraDescricao, 8, utf8_decode('Descrição'), 'TB', 0, 'L');
$pdf->Cell($largura, 8, utf8_decode('Referência'), 'TB', 0, 'L');
$pdf->Cell($largura, 8, 'Proventos', 'TB', 0, 'L');
$pdf->Cell(0, 8, 'Descontos', 'TBR', 1, 'L');

$pdf->SetFont('Arial', '', 11);
$totalProventos = [];
$totalDescontos = [];
// print_r2($fichasFinanceiras, __LINE__, __FILE__, __FUNCTION__);
foreach ($fichasFinanceiras as $key => $lancamento) {
    if (is_int($key / 2)) {
        $pdf->SetFillColor(240, 240, 240);
    } else {
        $pdf->SetFillColor(250, 250, 250);
    }
    $proventos = ($lancamento['PROV_DESC_BASE'] == 'P' ? printValor($lancamento['VALOR']) : '');
    $totalProventos[] = floatValor($proventos);
    $descontos = ($lancamento['PROV_DESC_BASE'] == 'D' ? printValor($lancamento['VALOR']) : '');
    $totalDescontos[] = floatValor($descontos);
    $referencia = ($lancamento['REFERENCIA'] != '0.00' ? utf8_decode($lancamento['REFERENCIA']) : '');

    if (array_key_last($fichasFinanceiras) == $key) {
        $pdf->Cell($larguraCodigo, 8, $lancamento['EVENTO_CODIGO'], 'BL', 0, 'L', true);
        $pdf->Cell($larguraDescricao, 8, utf8_decode($lancamento['EVENTO_DESCRICAO']), 'B', 0, 'L', true);
        $pdf->Cell($largura, 8, $referencia, 'B', 0, 'L', true);
        $pdf->Cell($largura, 8, $proventos, 'B', 0, 'L', true);
        $pdf->Cell(0, 8, $descontos, 'BR', 1, 'L', true);
    } else {
        $pdf->Cell($larguraCodigo, 8, $lancamento['EVENTO_CODIGO'], 'L', 0, 'L', true);
        $pdf->Cell($larguraDescricao, 8, utf8_decode($lancamento['EVENTO_DESCRICAO']), 0, 0, 'L', true);
        $pdf->Cell($largura, 8, $referencia, 0, 0, 'L', true);
        $pdf->Cell($largura, 8, $proventos, 0, 0, 'L', true);
        $pdf->Cell(0, 8, $descontos, 'R', 1, 'L', true);
    }
}
$pdf->Ln(2);

$largura = $width / 3;
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell($largura, 8, 'Total de Proventos', 'TL', 0, 'L');
$pdf->Cell($largura, 8, 'Total de Descontos', 'T', 0, 'L');
$pdf->Cell(0, 8, utf8_decode('Líquido a Receber'), 'TR', 1, 'L');
$pdf->SetFont('Arial', '', 11);
$pdf->Cell($largura, 8, 'R$ ' . printValor(array_sum($totalProventos)), 'BL', 0, 'L');
$pdf->Cell($largura, 8, 'R$ ' . printValor(array_sum($totalDescontos)), 'B', 0, 'L');
$pdf->Cell(0, 8, 'R$ ' . printValor((array_sum($totalProventos) - array_sum($totalDescontos))), 'BR', 1, 'L');
$pdf->Ln(2);

$largura = (($width - 20) / 5);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Cell($largura, 8, utf8_decode('Salário Base'), 'TL', 0, 'L');
$pdf->Cell($largura, 8, 'Base INSS', 'T', 0, 'L');
$pdf->Cell($largura, 8, 'Base IRRF', 'T', 0, 'L');
$pdf->Cell($largura, 8, 'Base FGTS', 'T', 0, 'L');
$pdf->Cell(0, 8, 'Dep. FGTS', 'TR', 1, 'L');
$pdf->SetFont('Arial', '', 11);
$salarioBase = isset($fichasFinanceiras[0]['SALARIO_BASE']) ? $fichasFinanceiras[0]['SALARIO_BASE'] : 0;

$pdf->Cell($largura, 8, 'R$ ' . printValor($salarioBase), 'BL', 0, 'L');
$baseInss = isset($fichasFinanceiras[0]['BASE_INSS']) ? $fichasFinanceiras[0]['BASE_INSS'] : 0;

$pdf->Cell($largura, 8, 'R$ ' . printValor($baseInss), 'B', 0, 'L');
$baseIrrf = isset($fichasFinanceiras[0]['BASE_IRRF']) ? $fichasFinanceiras[0]['BASE_IRRF'] : 0;

$pdf->Cell($largura, 8, 'R$ ' . printValor($baseIrrf), 'B', 0, 'L');
$baseFgts = isset($fichasFinanceiras[0]['BASE_FGTS']) ? $fichasFinanceiras[0]['BASE_FGTS'] : 0;

$pdf->Cell($largura, 8, 'R$ ' . printValor($baseFgts), 'B', 0, 'L');
$fgts = isset($fichasFinanceiras[0]['FGTS']) ? $fichasFinanceiras[0]['FGTS'] : 0;

$pdf->Cell(0, 8, 'R$ ' . printValor($fgts / 100), 'BR', 1, 'L');

$pdf->Output();
// unset($_SESSION['printContraCheque']);
// unset($fichasFinanceiras);
// unset($infoUser);
