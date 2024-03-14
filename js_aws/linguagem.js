// english version
const english = {
    "header": {
        "quemSomos":"Contact",
        "oportunidades":"Opportunities",
        "portal":"Corporate Portal",
    },
    "main":["Human Resources","Temporary Labor","Outsourcing Projects","Talent Recruiter","Tell me more"],
    "geral":[
        "First RH Group is an organization that involves three companies recognized for excellence in Human Resources. ETT FIRST, specializing in temporary labor, SHIFT, with solutions in outsourcing projects and services, and FIRST RECRUIT, talent recruiter.",
        "Each one of them is an expert on people, their different profiles and potentials. Whatever is your company needs, our goal is to find and retain employees in an agile, versatile and accurate way.",
        "First RH Group works for the right people. And these are the ones that will be part of your team."],
    "ett_first":["If your company need employees for a temporary service, ETT First is specialized in that segment.","Also providing legal advice.","Contact now!"],
    "shift":["For outsourced projects, service management and satisfied employees, contact Shift.","A reliable business partner."],
    "recruit":["Recruiting talents that are aligned with your company values.","Through the best selection standards."],
    "endereco":["Address","Contact number","First RH Group follows all data protection legislation - LGPD"],
    "numeros":["Some of ours Big Numbers...","years of experience","multinational companies that are clients in different segments","customer satisfaction","operating cities","outsourced and temporary employees in 2020/2021","job openings in 2020/2021"],
}
localStorage.setItem('firstrh-us',JSON.stringify(english) || '');
// versão Português
const portugues = {
    "header": {
        "quemSomos":"Contato",
        "oportunidades":"Oportunidades",
        "portal":"Portal Corporativo",
    },
    "main":["Recursos Humanos","Trabalho Temporário","Projetos de Terceirização","Busca de Talentos","Saiba mais"],
    "geral":[
        "O First RH Group é uma organização que envolve três empresas reconhecidas pela excelência em Recursos Humanos. A ETT FIRST, especializada em mão-de-obra temporária, a SHIFT, com soluções em projetos de terceirização e serviços, e a FIRST RECRUIT, recrutadora de talentos.",
        "Cada uma delas é especialista em pessoas, seus diferentes perfis e potenciais. Seja qual for a necessidade da sua empresa, trabalhamos conectadas para que você encontre e retenha colaboradores de forma ágil, versátil e certeira.",
        "As empresas do First RH Group trabalham pelas pessoas certas. E são estas pessoas que vão trabalhar na sua empresa."],
    "ett_first":["Se sua empresa precisa de colaboradores para serviços temporários, a ETT First, empresa especializada nesse segmento, é capaz de trazer as soluções de que sua organização necessita.","Contamos também com Consultoria Jurídica respeitada e apta para te trazer maior segurança.","Entre em contato agora mesmo!"],
    "shift":["Se sua empresa precisa de um projeto de terceirização seguro, colaboradores satisfeitos, administração de serviços e segurança jurídica, a SHIFT, empresa especializada em gestão de serviços e projetos de terceirização, fará isso com você.","Seriedade e Confiança"],
    "recruit":["Se a sua empresa precisa encontrar talentos que se alinham perfeitamente à sua necessidade, contrate a FIRST RECRUIT, empresa especializada em recrutamento e seleção de pessoal.","Melhores práticas no processo de seleção."],
    "endereco":["Endereço","Telefone","A First RH Group segue todas as diretrizes e medidas de segurança da (Lei Geral de Proteção de Dados Pessoais)"],
    "numeros":["Alguns números da First RH Group...","anos de atuação","clientes multinacionais em diversos segmentos","clientes satisfeitos","cidades de atuação","colaboradores terceirizados e temporários em 2020/2021","vagas abertas em 2020/2021"],
}
localStorage.setItem('firstrh-br',JSON.stringify(portugues) || '');
localStorage.setItem('firstrh-currentLing','br');