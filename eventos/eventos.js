/*
  EVENTOS DA LACGA
  ----------------
  Para adicionar um evento:
    1. Copie um bloco { ... } da lista e preencha os campos.
    2. Salve. O evento aparece no calendário do site, no dia marcado.

  Campos:
    titulo            – nome do evento
    tipo              – ex.: "Aula aberta", "Curso", "Simpósio", "Ação de extensão"
    ministrante       – quem vai ministrar, ex.: "Dr. Daniel Tomich" (opcional; aparece como "com Dr. ...")
    data              – no formato ANO-MÊS-DIA (ex.: "2026-11-04")
    horario           – ex.: "17h" ou "8h às 12h" (opcional)
    local             – ex.: "ILA (Prédio de Medicina)" (opcional)
    linkFormulario    – link do forms de inscrição
    inscricoesAbertas – true normalmente; false para encerrar as inscrições antes do dia do evento

  Status do formulário (o site escolhe sozinho):
    • Inscrições em breve   – linkFormulario vazio ""      → botão "Formulário em breve" bloqueado
    • Inscrições abertas    – linkFormulario preenchido    → botão "Inscrever-se" abre o forms
    • Inscrições encerradas – a data do evento já passou, ou inscricoesAbertas: false → botão bloqueado
*/
window.EVENTOS = [
  {
    titulo: "Apendicectomia laparoscópica",
    tipo: "Aula magna",
    ministrante: "Dr. Ozimo Gama",
    data: "2026-09-30",
    horario: "17h",
    local: "Auditório do ILA (Prédio de Medicina)",
    linkFormulario: "",
    inscricoesAbertas: true
  },
  {
    titulo: "Abdome agudo inflamatório: diagnóstico e conduta",
    tipo: "Aula aberta",
    ministrante: "Dr. Daniel Tomich",
    data: "2026-11-04",
    horario: "17h",
    local: "ILA (Prédio de Medicina)",
    linkFormulario: "",
    inscricoesAbertas: true
  }
];
