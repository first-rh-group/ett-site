<?php
/* include('/home/grupofirstrh/public_html/portal/session/local_functions.php'); */
include('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\portal\session\local_functions.php');
require('C:\Data Campos Sistemas\Apache24\htdocs\projeto_ett\fpdf183\fpdf.php');
if (!isset($_SESSION['rendimentos']['cpf']) || !isset($_SESSION['rendimentos']['cnpj']) || $_SESSION['rendimentos']['cpf'] == '' || $_SESSION['rendimentos']['cnpj'] == '') {
    echo "NÃO FOI POSSÍVEL ATENDER A REQUISIÇÃO";
    die();
}
$informeRendimentos = informeRendimentos_new($_SESSION['rendimentos']['cpf'], $_SESSION['rendimentos']['cnpj'], '2021');
// echo "NÃO FOI POSSÍVEL ATENDER A REQUISIÇÃO";
$_SESSION['printInformeRendimentos']['sumario'] = $informeRendimentos;

class PDF extends FPDF
{
    function Header()
    {
        $margins['left'] = 11;
        $margins['right'] = 11;
        $this->SetLeftMargin($margins['left']);
        $this->SetRightMargin($margins['right']);
        $netWidth = $this->GetPageWidth() - array_sum($margins);
        $padding_left = 34;
        $largura = (($netWidth / 2) - $padding_left + array_sum($margins));
        $altura = 8;
        $bordas = 0;
        $this->SetFont('Arial', 'B', 16);
        $this->SetDrawColor(128, 128, 128);
        $this->Image('https://grupofirstrh.com.br/controles_img/brasao.png', $margins['left'], 10, 23, 0);
        $this->SetLeftMargin($padding_left);
        $this->Cell($largura, $altura, utf8_decode('Ministério da Fazenda'), $bordas, 1, 'C');
        $this->SetFont('Arial', '', 12);
        $this->Cell($largura, $altura, 'Secretaria da Receita Federal do Brasil', $bordas, 1, 'C');
        $this->SetFont('Arial', 'B', 12);
        $this->Cell($largura, $altura, utf8_decode('Imposto sobre a Renda da Pessoa Física'), $bordas, 1, 'L');
        $this->SetFont('Arial', 'BI', 12);
        $this->Cell($largura, $altura, utf8_decode('Exercício de ') . $_SESSION['printInformeRendimentos']['sumario']['ano_exercicio'], $bordas, 1, 'C');
        $this->SetY(10);
        $this->SetLeftMargin($largura + $padding_left + 10);
        // $bordas = 'TBLR';
        $this->SetFont('Arial', '', 11);
        $this->MultiCell(0, 7, utf8_decode('Comprovante de Rendimentos Pagos e de Imposto sobre a Renda Retido na Fonte'), $bordas, 'J');
        $this->Ln(4);
        $this->SetFont('Arial', 'B', 11);
        $this->Cell(0, $altura, utf8_decode('Ano-calendário de ') . $_SESSION['printInformeRendimentos']['sumario']['ano_base'], $bordas, 1, 'C');
        $this->SetLineWidth(0.2);
        $this->SetDrawColor(0, 0, 0);
        $this->Line(($largura + $padding_left + 7), 9, $largura + $padding_left + 7, 44);
        $this->Rect($margins['left'], 9, $netWidth, 35);
        $this->Ln(4);
    }
    //Page footer
    function Footer()
    {
        $this->SetY(-20);
        $this->SetX(0);
        $this->SetLeftMargin(11);
        $this->SetRightMargin(11);
        $this->SetFont('Arial', 'B', 9);
        $this->Cell(0, 5, utf8_decode('Informe de Rendimentos - Exercício de ') . $_SESSION['printInformeRendimentos']['sumario']['ano_exercicio'] . ' e ' . utf8_decode('Ano-Calendário de ') . $_SESSION['printInformeRendimentos']['sumario']['ano_base'], 0, 1, 'C');
        $this->SetFont('Arial', '', 9);
        $this->Cell(0, 5, ajustaNome($_SESSION['printInformeRendimentos']['sumario']['informes']['NOMEFUNCIONARIO']) . ' - CPF n. ' . print_cpf($_SESSION['printInformeRendimentos']['sumario']['informes']['CPF']), 0, 1, 'C');
        $this->SetFont('Arial', '', 8);
        $this->Cell(0, 5, utf8_decode('Pág. ') . $this->PageNo() . ' de {nb}', 0, 1, 'C');
    }
}
$pdf = new PDF();
$pdf->AliasNbPages();
$pdf->AddPage('P', 'A4');
$nomeArquivo = "Informe de Rendimentos";
$pdf->SetTitle($nomeArquivo, true);
$pdf->SetSubject($nomeArquivo, true);
$margins['left'] = 11;
$margins['right'] = 11;
$pdf->SetLeftMargin($margins['left']);
$pdf->SetRightMargin($margins['right']);
$width = $pdf->GetPageWidth();
$netWidth = $pdf->GetPageWidth() - array_sum($margins);
$pdf->Ln(1.5);
$pdf->SetFont('Arial', '', 9);
$bordas = 'TBLR';
$pdf->SetLineWidth(0.1);
$pdf->MultiCell(0, 6, utf8_decode('Verifique as condições e o prazo para a apresentação da Declaração do Imposto sobre a Renda da Pessoa Física para este ano-calendário no sítio da Secretaria da Receita Federal do Brasil na Internet, no endereço <www.receita.fazenda.gov.br>.'), $bordas, 'J');
$pdf->Ln(1.5);
$largura = 0;
$altura = 6;
$bordas = 'LRTB';
$bordas = 0;
$pdf->Ln(1);
$ordinate = $pdf->GetY();
$abscissa = $pdf->GetX();
$linhaPequena = 5;
$limiteInferior = ($altura * 3);
$pdf->Line($abscissa, ($ordinate + ($altura / 2)), ($abscissa + $linhaPequena), ($ordinate + ($altura / 2)));
$pdf->Line($abscissa, ($ordinate + ($altura / 2)), $abscissa, ($ordinate + $limiteInferior));
$pdf->Line(($netWidth + $margins['left']), ($ordinate + ($altura / 2)), ($netWidth + $margins['left']), ($ordinate + $limiteInferior));
$pdf->Line($abscissa, ($ordinate + ($altura / 2)), ($netWidth + $margins['left']), ($ordinate + ($altura / 2)));
$pdf->Line($abscissa, ($ordinate + $limiteInferior), ($netWidth + $margins['left']), ($ordinate + $limiteInferior));

$pdf->SetFont('Arial', 'B', 11);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetY($ordinate);
$pdf->SetFillColor(255, 255, 255);
$string = utf8_decode('1. Fonte Pagadora Pessoa Jurídica');
$tamanhoString = $pdf->GetStringWidth($string);
$pdf->Cell(($tamanhoString + 2), $altura, $string, $bordas, 1, 'L', true);
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + 2);
$pdf->SetFont('Arial', 'B', 10.5);
$larguraPrimeira = 50;
$bordas = 'R';
$pdf->Cell($larguraPrimeira, $altura, utf8_decode('CNPJ'), $bordas, 0, 'L');
$bordas = 0;
$largura = 0;
$pdf->SetLeftMargin($larguraPrimeira + 15);
$pdf->Cell($largura, $altura, utf8_decode('Nome Empresarial'), $bordas, 1, 'L');
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + 2);
$pdf->SetFont('Arial', '', 10.5);
$bordas = 'R';
$pdf->Cell($larguraPrimeira, $altura, print_cnpj($informeRendimentos['empresa'][0]), $bordas, 0, 'L');
$bordas = 0;
$largura = 0;
$pdf->SetLeftMargin($larguraPrimeira + 15);
$pdf->Cell($largura, $altura, utf8_decode(ajustaNome($informeRendimentos['empresa'][1])), $bordas, 1, 'L');
$pdf->SetLeftMargin($margins['left']);
$pdf->Ln(1.5);
$ordinate = $pdf->GetY();
$abscissa = $pdf->GetX();
$linhaPequena = 5;
$limiteInferior = ($altura * 5);
$pdf->Line($abscissa, ($ordinate + ($altura / 2)), ($abscissa + $linhaPequena), ($ordinate + ($altura / 2)));
$pdf->Line($abscissa, ($ordinate + ($altura / 2)), $abscissa, ($ordinate + $limiteInferior));
$pdf->Line(($netWidth + $margins['left']), ($ordinate + ($altura / 2)), ($netWidth + $margins['left']), ($ordinate + $limiteInferior));
$pdf->Line($abscissa, ($ordinate + ($altura / 2)), ($netWidth + $margins['left']), ($ordinate + ($altura / 2)));
$pdf->Line($abscissa, ($ordinate + $limiteInferior), ($netWidth + $margins['left']), ($ordinate + $limiteInferior));

$pdf->SetFont('Arial', 'B', 11);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetY($ordinate);
$pdf->SetFillColor(255, 255, 255);
$string = utf8_decode('2. Pessoa Física Benefíciária dos Rendimentos');
$tamanhoString = $pdf->GetStringWidth($string);
$pdf->Cell(($tamanhoString + 2), $altura, $string, $bordas, 1, 'L', true);
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + 2);
$pdf->SetFont('Arial', 'B', 10.5);
$larguraPrimeira = 50;
$bordas = 'R';
$pdf->Cell($larguraPrimeira, $altura, 'CPF', $bordas, 0, 'L');
$bordas = 0;
$largura = 0;
$pdf->SetLeftMargin($larguraPrimeira + 15);
$pdf->Cell($largura, $altura, utf8_decode('Nome Completo'), $bordas, 1, 'L');
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + 2);
$pdf->SetFont('Arial', '', 10.5);
$bordas = 'R';
$pdf->Cell($larguraPrimeira, $altura, print_cpf($informeRendimentos['informes']['CPF']), $bordas, 0, 'L');
$bordas = 0;
$largura = 0;
$pdf->SetLeftMargin($larguraPrimeira + 15);
$pdf->Cell($largura, $altura, utf8_decode(ajustaNome($informeRendimentos['informes']['NOMEFUNCIONARIO'])), $bordas, 1, 'L');
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);

$ordinate = $pdf->GetY();
$abscissa = $pdf->GetX();
$pdf->Line($abscissa, $ordinate, ($netWidth + $margins['left']), $ordinate);

$pdf->SetFont('Arial', 'B', 10.5);
$pdf->SetLeftMargin($margins['left'] + 2);
$pdf->Cell(0, $altura, utf8_decode('Natureza do rendimento'), $bordas, 1, 'L');
$pdf->SetFont('Arial', '', 10.5);
$pdf->Cell(0, $altura, utf8_decode('Rendimentos do trabalho assalariado'), $bordas, 1, 'L');

// ! 3. Rendimentos Tributáveis, Deduções e Imposto sobre a Renda Retido na Fonte $pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Ln(2);
$pdf->Cell($tamanhoString, $altura, utf8_decode('3. Rendimentos Tributáveis, Deduções e Imposto sobre a Renda Retido na Fonte'), $bordas, 1, 'L');

$altura = 7;
$larguraValores = 35;
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$linha['x1'] = $netWidth + $margins['left'];
$linha['y1'] = $ordinate_1;
$bordas = 'TBLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('1. Total dos rendimentos (inclusive e férias)'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 'T';
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['TOTREND']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('2. Contribuição previdenciária oficial'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['CPOFICIAL']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('3. Contribuições a entidades de previdência complementar e a fundos de aposentadoria prog. individual (Fapi) (quadro 7)'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['CPPRIV']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('4. Pensão alimentícia (Preencher também o quadro 7)'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['PENSAO']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('5. Imposto sobre a renda retido na fonte'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['IRRFFOLHA']), $bordas, 1, 'R');
$ordinateFinal = $pdf->GetY();
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);
$linha['x2'] = $netWidth + $margins['left'];
$linha['y2'] = $ordinateFinal;
$pdf->Line($linha['x1'], $linha['y1'], $linha['x2'], $linha['y2']);

// ! 4. Rendimentos Isentos e Não Tributáveis
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Ln(2);
$pdf->Cell($tamanhoString, $altura, utf8_decode('4. Rendimentos Isentos e Não Tributáveis'), $bordas, 1, 'L');

$altura = 7;
$larguraValores = 35;
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$linha['x1'] = $netWidth + $margins['left'];
$linha['y1'] = $ordinate_1;
$bordas = 'TBLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('1. Parcela isenta dos proventos de aposentadoria, reserva remunerada, reforma e pensão (65 anos ou mais)'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 'T';
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['RIP65']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('2. Diárias e ajudas de custo'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['RIDAC']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('3. Pensão e proventos de aposentadoria ou reforma por moléstia grave ou por acidente em serviço'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['RIIRP']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('4. Lucros e dividendos, apurados a partir de 1996, pagos por pessoa jurídica (lucro real, presumido ou arbitrado)'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
// ! NÃO TEMOS UM CAMPO APONTANDO PARA CÁ. O CERTO SERIA TERMOS UM CAMPO RIL96, MAS NÃO TEMOS ESSE CAMPO. 
$pdf->Cell(0, $altura, 'R$ ' . printValor('0'), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('5. Valores pagos ao titular ou sócio da microempresa ou de pequeno porte, exceto pro labore, aluguéis ou serviços'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
// ? NÃO TEMOS ESSE PAGAMENTO
$pdf->Cell(0, $altura, 'R$ 0,00', $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('6. Indenizações por rescisão de contrato de trabalho, inclusive a título de PDV, e por acidente de trabalho'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['RIIRP']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('7. Outros Abono pecuniário'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['RIAP'] + $informeRendimentos['informes']['RIO']), $bordas, 1, 'R');
$ordinateFinal = $pdf->GetY();
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);
$linha['x2'] = $netWidth + $margins['left'];
$linha['y2'] = $ordinateFinal;
$pdf->Line($linha['x1'], $linha['y1'], $linha['x2'], $linha['y2']);

// ! 5. Rendimentos sujeitos à Tributação Exclusiva (rendimento líquido)
$pdf->AddPage('P', 'A4');
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Ln(2);
$pdf->Cell($tamanhoString, $altura, utf8_decode('5. Rendimentos sujeitos à Tributação Exclusiva (rendimento líquido)'), $bordas, 1, 'L');

$altura = 7;
$larguraValores = 35;
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$linha['x1'] = $netWidth + $margins['left'];
$linha['y1'] = $ordinate_1;
$bordas = 'TBLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('1. Décimo terceiro salário'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 'T';
$pdf->SetFont('Arial', '', 10);

$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['D13SAL']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('2. Imposto sobre a renda retido na fonte sobre 13° salário'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['IRRFD13SAL']), $bordas, 1, 'R');
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);

$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$ordinate_1 = $pdf->GetY();
$bordas = 'BLR';
$pdf->MultiCell(($netWidth - $larguraValores), $altura, utf8_decode('3. Outros'), $bordas, 'J');
$ordinate_2 = $pdf->GetY();
$pdf->SetY($ordinate_1);
$pdf->SetX(($netWidth - $larguraValores + $margins['left']));
$bordas = 0;
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, $altura, 'R$ ' . printValor($informeRendimentos['informes']['RIO']), $bordas, 1, 'R');
$ordinateFinal = $pdf->GetY();
$pdf->Line(($netWidth - $larguraValores + $margins['left']), $ordinate_2, ($netWidth + $margins['left']), $ordinate_2);
$pdf->SetY($ordinate_2);
$linha['x2'] = $netWidth + $margins['left'];
$linha['y2'] = $ordinateFinal;
$pdf->Line($linha['x1'], $linha['y1'], $linha['x2'], $linha['y2']);

// ! 6.Rendimentos Recebidos Acumuladamente- Art.12-A da Lei n°7.713,de 1988 (sujeito à tributação exclusiva)
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Ln(2);
$pdf->Justify(0, 5, utf8_decode('6. Rendimentos Recebidos Acumuladamente - Art.12-A da Lei 7.713/88 (sujeito à tributação exclusiva)'), $netWidth, $margins['left'], $margins['right']);
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->SetFont('Arial', '', 10.5);
$altura = 7;
$bordas = 'LTB';
$pdf->Cell(($netWidth - $larguraValores), $altura, utf8_decode('Número do proceso:'), $bordas, 0, 'L');
$bordas = 'RTB';
$pdf->Cell(0, $altura, 'n. de meses: 0', $bordas, 1, 'C');
$bordas = 'LRB';
$pdf->Cell(0, $altura, 'Natureza do rendimento:', $bordas, 1, 'L');
$bordas = 'TLRB';
$pdf->Ln(2);
$pdf->Cell(($netWidth - $larguraValores), $altura, utf8_decode('1. Total dos rendimentos tributáveis (inclusive férias e décimo terceiro salário)'), $bordas, 0, 'L');
$bordas = 'TRB';
$pdf->Cell(0, $altura, '0,00', $bordas, 1, 'R');
$bordas = 'LRB';
$pdf->Cell(($netWidth - $larguraValores), $altura, utf8_decode('2. Exclusão: Despesas com a ação judicial'), $bordas, 0, 'L');
$bordas = 'RB';
$pdf->Cell(0, $altura, '0,00', $bordas, 1, 'R');
$bordas = 'LRB';
$pdf->Cell(($netWidth - $larguraValores), $altura, utf8_decode('3. Dedução: Contribuição previdenciária oficial'), $bordas, 0, 'L');
$bordas = 'RB';
$pdf->Cell(0, $altura, '0,00', $bordas, 1, 'R');
$bordas = 'LRB';
$pdf->Cell(($netWidth - $larguraValores), $altura, utf8_decode('4. Dedução: Pensão alimentícia (preencher também o quadro 7)'), $bordas, 0, 'L');
$bordas = 'RB';
$pdf->Cell(0, $altura, '0,00', $bordas, 1, 'R');
$bordas = 'LRB';
$pdf->Cell(($netWidth - $larguraValores), $altura, utf8_decode('5. Imposto sobre a renda retido na fonte'), $bordas, 0, 'L');
$bordas = 'RB';
$pdf->Cell(0, $altura, '0,00', $bordas, 1, 'R');
$ordinate = $pdf->GetY();
$abscissa = $pdf->GetX();
$pdf->MultiCell(($netWidth - $larguraValores), ($altura - 2), utf8_decode('6. Rendimentos isentos de pensão, proventos de aposentadoria ou reforma por moléstia grave ou aposentadoria ou reforma por acidente em serviço'), 'R', 'L');
$pdf->SetY($ordinate);
$pdf->Cell(0, $altura, '0,00', 0, 1, 'R');
$pdf->Rect($abscissa, $ordinate, $netWidth, (($altura - 2) * 2));

$textoInfoComplementar = utf8_decode('Os rendimentos seguintes estão informados na linha 1, quadro 3 e/ou linha 3, quadro 5: Rendimentos do trabalho assalariado:') . ' R$ ' . printValor($informeRendimentos['informes']['TOTREND']) . '.';

// ! 7.Informações Complementares
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Ln(4);
$pdf->Cell($tamanhoString, $altura, utf8_decode('7. Informações Complementares'), 0, 1, 'L');
$bordas = 'LRTB';
$pdf->SetFont('Arial', '', 10.5);
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$pdf->MultiCell(0, ($altura - 2), $textoInfoComplementar, $bordas, 'L');

// ! 7.1. Pagamentos a Planos de Saúde
if (isset($informeRendimentos['planoSaude'])) {
    if (count($informeRendimentos['planoSaude']) > 0) {
        $pdf->SetFont('Arial', 'B', 11);
        $pdf->Ln(4);
        $pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
        $pdf->Cell($tamanhoString, $altura, utf8_decode('7.1 Informações Complementares (Pagamentos a Planos de Saúde)'), 0, 1, 'L');
        $bordas = 'LRTB';
        $pdf->SetX(0);
        $pdf->SetLeftMargin($margins['left']);
        $linhaAuxiliar = 38;
        foreach ($informeRendimentos['planoSaude'] as $pagamentoPlanoSaude) {
            $pdf->SetX(0);
            $pdf->SetLeftMargin($margins['left']);
            $pdf->SetFont('Arial', 'B', 10.5);
            $altura = 6;
            $bordas = 'TLR';
            $pdf->Cell(($netWidth - $linhaAuxiliar), $altura, utf8_decode('Operadora de Plano de Saúde'), $bordas, 0, 'L');
            $bordas = 'TR';
            $pdf->Cell(0, $altura, 'CNPJ da Operadora', $bordas, 1, 'L');
            $pdf->SetFont('Arial', '', 10.5);
            $bordas = 'BLR';
            $pdf->Cell(($netWidth - $linhaAuxiliar), $altura, utf8_decode($pagamentoPlanoSaude['operadora'][2]), $bordas, 0, 'L');
            $bordas = 'BR';
            $pdf->Cell(0, $altura, print_cnpj($pagamentoPlanoSaude['operadora'][1]), $bordas, 1, 'L');
            $pdf->SetFont('Arial', 'B', 10.5);
            $bordas = 'BL';
            $pdf->Cell(($netWidth - ($linhaAuxiliar - 10) - $linhaAuxiliar), $altura, utf8_decode('Nome Beneficiário'), $bordas, 0, 'L');
            $bordas = 'BL';
            $pdf->Cell(($linhaAuxiliar - 10), $altura, 'CPF', $bordas, 0, 'L');
            $bordas = 'BLR';
            $pdf->Cell(0, $altura, 'Valor', $bordas, 1, 'L');
            $pdf->SetFont('Arial', '', 10.5);

            if (isset($pagamentoPlanoSaude['titular']) && isset($pagamentoPlanoSaude['titular'][3]) && $pagamentoPlanoSaude['titular'][3] != '') {
                $bordas = 'BL';
                $pdf->Cell(($netWidth - ($linhaAuxiliar - 10) - $linhaAuxiliar), $altura, utf8_decode($pagamentoPlanoSaude['titular'][2]), $bordas, 0, 'L');
                $bordas = 'BL';
                $pdf->Cell(($linhaAuxiliar - 10), $altura, print_cpf($pagamentoPlanoSaude['titular'][1]), $bordas, 0, 'L');
                $bordas = 'BLR';
                $pdf->Cell(0, $altura, 'R$ ' . printValor(($pagamentoPlanoSaude['titular'][3] / 100)), $bordas, 1, 'L');
            }
            // print_r2($pagamentoTitular, __LINE__, __FILE__, __FUNCTION__);
            foreach ($pagamentoPlanoSaude['dependentes'] as $key => $pagamentoDependente) {
                $bordas = 'BL';
                $pdf->Cell(($netWidth - ($linhaAuxiliar - 10) - $linhaAuxiliar), $altura, utf8_decode($pagamentoDependente[3]), $bordas, 0, 'L');
                $bordas = 'BL';
                $pdf->Cell(($linhaAuxiliar - 10), $altura, print_cpf($pagamentoDependente[1]), $bordas, 0, 'L');
                $bordas = 'BLR';
                $pdf->Cell(0, $altura, 'R$ ' . printValor(($pagamentoDependente[5] / 100)), $bordas, 1, 'L');
            }
            $pdf->Ln(3);
        }
    }
}

// ! 8. Responsável pelas informações
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left'] + $linhaPequena + 2);
$pdf->SetFont('Arial', 'B', 11);
$pdf->Ln(4);
$pdf->Cell($tamanhoString, $altura, utf8_decode('8. Responsável pelas informações'), 0, 1, 'L');
$pdf->SetFont('Arial', '', 9);
$pdf->SetX(0);
$pdf->SetLeftMargin($margins['left']);
$altura = 6;
$bordas = 'LT';
$pdf->Cell(($netWidth - 30 - 45), $altura, 'Nome', $bordas, 0, 'L');
$bordas = 'T';
$pdf->Cell(30, $altura, 'Data', $bordas, 0, 'L');
$bordas = 'TR';
$pdf->Cell(45, $altura, 'Assinatura', $bordas, 1, 'L');
$pdf->SetFont('Arial', 'B', 10);
$bordas = 'L';
$pdf->Cell(($netWidth - 30 - 45), $altura, utf8_decode(ajustaNome($informeRendimentos['responsavel'])), $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 10);
$bordas = 0;
$pdf->Cell(30, $altura, '05/01/' . $_SESSION['printInformeRendimentos']['sumario']['ano_base'] + 1, $bordas, 0, 'L');
$bordas = 'R';
$pdf->Cell(45, $altura, '', $bordas, 1, 'L');
$bordas = 'LB';
$pdf->Cell(($netWidth - 30 - 45), $altura, '', $bordas, 0, 'L');
$pdf->SetFont('Arial', '', 10);
$bordas = 'B';
$pdf->Cell(30, $altura, '', $bordas, 0, 'L');
$bordas = 'RB';
$pdf->Cell(45, $altura, '', $bordas, 1, 'L');
$pdf->SetFont('Arial', '', 8);
$bordas = 0;
$pdf->Cell(0, $altura, utf8_decode('Aprovado pela IN RFB n°1.215, de 15 de dezembro de 2011.'), $bordas, 1, 'L');


$pdf->Output();
// unset($_SESSION['printInformeRendimentos']);
// unset($infoRendimentos);
// unset($infoUser);
