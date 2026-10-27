/*
  INSCRIÇÕES DO PROCESSO SELETIVO (página seletivo.html)
  ------------------------------------------------------
  inscricoesAbertas – true quando as inscrições estiverem abertas; false mostra "Inscrições encerradas" no topo.
  periodo           – período das inscrições, aparece ao lado de "Inscrições abertas" (ex.: "10 a 20 de março"). Pode ficar "".

  edital         – nome do PDF do edital colocado na pasta seletivo/ (ex.: "edital-2027.pdf") ou um link completo.
                   Deixe "" enquanto o edital não for publicado.

  linkFormulario – cole aqui o link do formulário de inscrição (ex.: Google Forms).
                   Deixe "" enquanto não houver formulário: a página avisa que ele estará disponível em breve.

  materiais – PDFs de material de apoio. Para adicionar:
    1. Coloque o PDF na pasta seletivo/materiais/ com um nome simples, sem acentos nem espaços (ex.: anatomia-abdome.pdf)
    2. Adicione uma linha na lista abaixo:
         { titulo: "Nome que aparece na página", arquivo: "nome-do-arquivo.pdf" },
*/
window.SELETIVO = {
  inscricoesAbertas: false,
  periodo: "",

  edital: "",

  linkFormulario: "",

  materiais: [
    // { titulo: "Anatomia do abdome", arquivo: "anatomia-abdome.pdf" },
  ]
};
