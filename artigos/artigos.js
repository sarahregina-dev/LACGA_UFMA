/*
  LISTA DE ARTIGOS DA LACGA
  -------------------------
  Para adicionar um trabalho:
    1. Coloque o PDF nesta pasta (artigos/). Use um nome simples, sem acentos nem espaços,
       ex.: apendicite-laparoscopica-2026.pdf
    2. Copie um dos blocos abaixo, cole no topo da lista e preencha os campos.
    3. Salve. O site mostra os trabalhos na ordem desta lista (o mais recente primeiro).

  Campos:
    titulo   – título do trabalho
    autores  – nomes separados por vírgula
    evento   – congresso, revista ou evento (ex.: "XI COIMAMA")
    ano      – ano de apresentação/publicação
    tipo     – "Artigo", "Resumo", "Pôster", "Relato de caso" ou "Revisão" (o filtro é criado a partir daqui)
    arquivo  – nome do PDF nesta pasta (deixe "" se ainda não tiver o PDF)

  Os dois itens abaixo são EXEMPLOS: apague-os quando adicionar os trabalhos reais.
*/
window.ARTIGOS = [
  {
    titulo: "Artigo 1",
    autores: "Autores 1, Autores 2",
    evento: "Evento",
    ano: 2026,
    tipo: "Trilha Principal",
    arquivo: "reprojeto-interface-aet-ihc-2026.pdf"
  },
  {
    titulo: "EXEMPLO – Título de um relato de caso",
    autores: "Nome Sobrenome, Nome Sobrenome",
    evento: "XXV Semana Brasileira do Aparelho Digestivo (SBAD)",
    ano: 2026,
    tipo: "Relato de caso",
    arquivo: ""
  }
];
