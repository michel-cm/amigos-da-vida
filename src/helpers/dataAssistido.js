export const getAssistidos = [
  {
    identificacao: {
      nome: "Fulano da Silva Lopes",
      nomeMae: "Fulana da Silva Lopes",
      dataNasc: new Date("1993", "11", "19"),
      nascidoEm: "Machado",
      estadoCivil: "solteiro",
      cpf: "12812812880",
      rg: "128128128800",
    },
    endereco: {
      rua: "Rua Floriano Peixoto",
      bairro: "Nova Gimirim",
      municipio: "Poço Fundo",
      telContato: "35999999999",
      localizacao: "urbano",
    },
    condicoesSaude: {
      diagnostico: "Testeteste",
      tratamento: "Testetesteteste",
      medicamentosUsoEaPosologia:
        "dsahda shdasjhdja shjdhasj dhasjdh djashdjas dashjdhsajdas dasjhashjdas",
      fralgaGeriatrica: false,
      tamanho: "M",
      necessitaCuidadosConstantesOutraPessoa: false,
      responsavelCuidado: "Maria Betania",
    },
    condicoesHabitacionais: {
      tipoResidencia: "alugada",
      possuiEnergiaEletrica: false,
      possuiAguaCanalizada: false,
      escoamentoSanitario: "rede",
      existeColetaLixo: true,
      numeroComodosDomicilio: 5,
      numeroDormitorios: 2,
      areaDesabamentoOuAlagamento: false,
      areaDificilAcesso: false,
      areaFortePresencaConflito: false,
    },
    composicaoFamiliar: {
      membros: 0,
      integrantes: [],
    },
    acessoProgramasSociais: {
      acesso: true,
      programas: [
        {
          bolsaFamilia: true,
          valor: 600,
        },
        {
          prestacaoContinuadaBPC: false,
          valor: 0,
        },
        { outros: false, descricao: "", valor: 0 },
      ],
      valorTotal: 600,
    },
    
  },
  {
    identificacao: {
      nome: "Fulaninhoo da Silva Lopes",
      nomeMae: "Fulana da Silva Lopes",
      dataNasc: new Date("2010-01-29"),
      nascidoEm: "Alfenas",
      estadoCivil: "Casado",
      cpf: "00000000000",
      rg: "128128128800",
    },
    endereco: {
      rua: "Rua Nordeste Leste",
      bairro: "Nova Iguacu",
      municipio: "Santos",
      telContato: "35999999999",
      localizacao: "Rural",
    },
    condicoesSaude: {
      diagnostico: "Testeteste",
      tratamento: "Testetesteteste",
      medicamentosUsoEaPosologia:
        "dsahda shdasjhdja shjdhasj dhasjdh djashdjas dashjdhsajdas dasjhashjdas",
      fralgaGeriatrica: "Não",
      tamanho: "M",
      necessitaCuidadosConstantesOutraPessoa: false,
      responsavelCuidado: "",
    },
    condicoesHabitacionais: {
      tipoResidencia: "alugada",
      possuiEnergiaEletrica: true,
      possuiAguaCanalizada: true,
      escoamentoSanitario: "rede coletora de esgoto",
      existeColetaLixo: true,
      numeroComodosDomicilio: 5,
      numeroDormitorios: 2,
      areaDesabamentoOuAlagamento: false,
      areaDificilAcesso: false,
      areaFortePresencaConflito: false,
    },
    composicaoFamiliar: {
      membros: 1,
      integrantes: [
        {
          nome: "Fulana da Silva Lopes Mendes Martins",
          dataNasc: "2010-01-29",
          parentesco: 1,
          ocupacao: "Diarista de manha/tarde/noitedsadsa",
          renda: 1800,
        },
      ],
    },
    acessoProgramasSociais: {
      acesso: false,
      programas: [
        {
          bolsaFamilia: false,
          valor: 0,
        },
        {
          prestacaoContinuadaBPC: false,
          valor: 0,
        },
        { outros: false, descricao: "", valor: 0 },
      ],
      valorTotal: 0,
    },
  },
];
