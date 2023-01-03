import * as C from "./styles";
import { useRef, useState } from "react";
import { Button } from "../../../components/Button";
import { ModalMembroFamilia } from "../ModalMembroFamilia";
import { TableViewComposicaoFamiliar } from "./TableViewComposicaoFamiliar";

import { useAssistidosContext } from "../../../hooks/useAssistidosContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import { AlertCard } from "../../../components/AlertCard";


export function PageAddAssistido() {
  //params?
  const { id } = useParams();

  const { getAssistidoForId } = useAssistidosContext();

  const [modalAttSucess, setModallAttSucess] = useState(false);


  /* SCROLL \/ */
  const identificacaoRef = useRef(0);
  const enderecoRef = useRef(0);
  const condicoesSaudeRef = useRef(0);
  const condicoesHabitacionaisRef = useRef(0);
  const composicaoCondicoesRef = useRef(0);
  const programasSociaisRef = useRef(0);

  const [activeIdentificacao, setActiveIdentificacao] = useState("active");
  const [activeEndereco, setActiveEndereco] = useState("disable");
  const [activeCondicoesSaude, setActiveCondicoesSaude] = useState("disable");
  const [activeCondicoesHabitacionais, setActiveCondicoesHabitacionais] =
    useState("disable");
  const [activeProgramasSociais, setActiveProgramasSociais] =
    useState("disable");
  const [activeComposicaoCondicoes, setActiveComposicaoCondicoes] =
    useState("disable");

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const verifyScrollSection = () => {
    if (
      window.scrollY <= identificacaoRef.current.offsetTop ||
      window.scrollY < enderecoRef.current.offsetTop - 80
    ) {
      setActiveIdentificacao("active");
    } else {
      setActiveIdentificacao("disable");
    }

    if (
      window.scrollY >= enderecoRef.current.offsetTop - 80 &&
      window.scrollY < condicoesSaudeRef.current.offsetTop - 80
    ) {
      setActiveEndereco("active");
    } else {
      setActiveEndereco("disable");
    }
    if (
      window.scrollY >= condicoesSaudeRef.current.offsetTop - 80 &&
      window.scrollY < condicoesHabitacionaisRef.current.offsetTop - 80
    ) {
      setActiveCondicoesSaude("active");
    } else {
      setActiveCondicoesSaude("disable");
    }
    if (
      window.scrollY >= condicoesHabitacionaisRef.current.offsetTop - 80 &&
      window.scrollY < composicaoCondicoesRef.current.offsetTop - 80
    ) {
      setActiveCondicoesHabitacionais("active");
    } else {
      setActiveCondicoesHabitacionais("disable");
    }
    if (
      window.scrollY >= composicaoCondicoesRef.current.offsetTop - 80 &&
      window.scrollY < programasSociaisRef.current.offsetTop - 180
    ) {
      setActiveComposicaoCondicoes("active");
    } else {
      setActiveComposicaoCondicoes("disable");
    }
    if (window.scrollY >= programasSociaisRef.current.offsetTop - 200) {
      setActiveProgramasSociais("active");
    } else {
      setActiveProgramasSociais("disable");
    }
  };

  window.addEventListener("scroll", verifyScrollSection);
  /* SCROLL /\ */

  const { addNewAssistido, getAllAssistidos,updateAssist } = useAssistidosContext();

  const navigate = useNavigate();

  const handleAddAssistido = async () => {
    await addNewAssistido({
      identificacao,
      endereco,
      condicoesSaude,
      condicoesHabitacionais,
      composicaoFamiliar,
      acessoProgramasSociais,
    }).then(
      async () =>
        await getAllAssistidos().then(() => {
          navigate("/assistidos");
        })
    );
  };

  const handleUpdateAssistido = async () => {
    await updateAssist(id, {
      identificacao,
      endereco,
      condicoesSaude,
      condicoesHabitacionais,
      composicaoFamiliar,
      acessoProgramasSociais,
    }).then(
      async () => setModallAttSucess(true),
      await getAllAssistidos().then(() => {
        setTimeout(() => setModallAttSucess(false), 2500);
      })
    );
  };

  const [identificacao, setIdentificao] = useState({
    nome: "",
    nomeMae: "",
    dataNasc: "",
    nascidoEm: "",
    estadoCivil: "solteiro",
    cpf: "",
    rg: "",
  });

  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    municipio: "",
    telContato: "",
    localizacao: "urbano",
  });

  const [condicoesSaude, setCondicoesSaude] = useState({
    diagnostico: "",
    tratamento: "",
    medicamentosUsoEaPosologia: "",
    fralgaGeriatrica: false,
    tamanho: "M",
    necessitaCuidadosConstantesOutraPessoa: false,
    responsavelCuidado: "",
  });

  const [condicoesHabitacionais, setCondicoesHabitacionais] = useState({
    tipoResidencia: "alugada",
    possuiEnergiaEletrica: true,
    possuiAguaCanalizada: true,
    escoamentoSanitario: "rede",
    existeColetaLixo: true,
    numeroComodosDomicilio: 0,
    numeroDormitorios: 0,
    areaDesabamentoOuAlagamento: false,
    areaDificilAcesso: false,
    areaFortePresencaConflito: false,
  });

  /* Códigos de Parentesco: 1-Cônjuge/ companheiro (a); 2-Filho (a); 3-Enteado (a); 4-Neto (a), Bisneto (a); 
  5-Pai/ Mãe; 6-Sogro (a); 7-Irmão/irmã; 8-Genro/Nora; 9-Outro parente; 10-Não parente.*/
  const [composicaoFamiliar, setComposicaoFamiliar] = useState([
    /*    
    integrantes: [
      {
        nome: "Fulana da Silva Lopes Mendes Martins",
        dataNasc: "2010-01-29",
        parentesco: 1,
        ocupacao: "Diarista de manha/tarde/noitedsadsa",
        renda: 1800,
      },
    ],
    */
  ]);

  const [acessoProgramasSociais, setAcessoProgramasSociais] = useState({
    acesso: false,
    valorTotal: 0,

    bolsaFamilia: false,
    valorBolsaFamilia: 0,

    prestacaoContinuadaBPC: false,
    valorBPC: 0,

    outros: false,
    descricao: "",
    valorOutros: 0,
  });

  const [modalMembroFamiliaOpen, setModalMembroFamiliaOpen] = useState(false);
  function openModal() {
    setModalMembroFamiliaOpen(true);
  }

  function deleteMembroFamiliar(list, id) {
    const newList = list.filter((membro, index) => {
      return index != id;
    });
    return newList;
  }

  useEffect(() => {
    if (id) {
      setIdentificao(getAssistidoForId(id)[0].identificacao);
      setEndereco(getAssistidoForId(id)[0].endereco);
      setCondicoesSaude(getAssistidoForId(id)[0].condicoesSaude);
      setCondicoesHabitacionais(
        getAssistidoForId(id)[0].condicoesHabitacionais
      );
      setComposicaoFamiliar(getAssistidoForId(id)[0].composicaoFamiliar);
      setAcessoProgramasSociais(
        getAssistidoForId(id)[0].acessoProgramasSociais
      );
    }
  }, [id, getAssistidoForId]);

  return (
    <C.Container>
       {modalAttSucess && (
        <AlertCard title="Atualizado com sucesso" type="green" />
      )}
      <C.AreaContent>
        <C.Aside>
          <C.ContentInformations>
            <a
              className={activeIdentificacao}
              onClick={() => scrollToSection(identificacaoRef)}
            >
              Identificação
            </a>
            <a
              className={activeEndereco}
              onClick={() => scrollToSection(enderecoRef)}
            >
              Endereço
            </a>
            <a
              className={activeCondicoesSaude}
              onClick={() => scrollToSection(condicoesSaudeRef)}
            >
              Condições de saúde
            </a>
            <a
              className={activeCondicoesHabitacionais}
              onClick={() => scrollToSection(condicoesHabitacionaisRef)}
            >
              Condições Habitacionais
            </a>
            <a
              className={activeComposicaoCondicoes}
              onClick={() => scrollToSection(composicaoCondicoesRef)}
            >
              Composição e Rendimentos
            </a>
            <a
              className={activeProgramasSociais}
              onClick={() => scrollToSection(programasSociaisRef)}
            >
              Programas sociais
            </a>
          </C.ContentInformations>
          <C.AreaButtonMenu>
            <Button
              fn={id ? handleUpdateAssistido : handleAddAssistido}
              title={id ? "Atualizar" : "Adicionar assistido"}
            />
          </C.AreaButtonMenu>
          <C.AreaButtonMenu>
            <Button title={"Cancelar"} type={"cancel"} />
          </C.AreaButtonMenu>
        </C.Aside>
        <C.Contentregistration>
          <C.AreaIdentificacao ref={identificacaoRef}>
            <h2>Identificação</h2>
            <C.Form>
              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Nome</label>
                <C.Input
                  type={"text"}
                  required
                  value={identificacao.nome}
                  onChange={(e) =>
                    setIdentificao({
                      ...identificacao,
                      nome: e.target.value,
                    })
                  }
                />
              </C.InputColumn>

              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Nome da mãe</label>
                <C.Input
                  type={"text"}
                  value={identificacao.nomeMae}
                  onChange={(e) =>
                    setIdentificao({
                      ...identificacao,
                      nomeMae: e.target.value,
                    })
                  }
                />
              </C.InputColumn>

              <C.AreaInputsDisplayFlex
                style={{
                  gap: "1rem",
                }}
              >
                <C.InputColumn
                  style={{
                    width: "150px",
                  }}
                >
                  <label>Data nascimento</label>
                  <C.Input
                    type={"date"}
                    required
                    value={identificacao.dataNasc}
                    onChange={(e) =>
                      setIdentificao({
                        ...identificacao,
                        dataNasc: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "300px",
                  }}
                >
                  <label>Nascido em</label>
                  <C.Input
                    type={"text"}
                    value={identificacao.nascidoEm}
                    onChange={(e) =>
                      setIdentificao({
                        ...identificacao,
                        nascidoEm: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Estado Civil</label>
                  <C.Select
                    value={identificacao.estadoCivil}
                    onChange={(e) =>
                      setIdentificao({
                        ...identificacao,
                        estadoCivil: e.target.value,
                      })
                    }
                  >
                    <option value="solteiro">Solteiro</option>
                    <option value="casado">Casado</option>
                    <option value="viuvo">Viúvo</option>
                  </C.Select>
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>

              <C.AreaInputsDisplayFlex
                style={{
                  gap: "1rem",
                }}
              >
                <C.InputColumn
                  style={{
                    width: "150px",
                  }}
                >
                  <label>CPF</label>
                  <C.Input
                    type={"text"}
                    required
                    maxLength={11}
                    value={identificacao.cpf}
                    onChange={(e) =>
                      setIdentificao({
                        ...identificacao,
                        cpf: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "180px",
                  }}
                >
                  <label>RG</label>
                  <C.Input
                    type={"text"}
                    maxLength={12}
                    value={identificacao.rg}
                    onChange={(e) =>
                      setIdentificao({
                        ...identificacao,
                        rg: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>
            </C.Form>
          </C.AreaIdentificacao>

          <C.AreaEndereco ref={enderecoRef}>
            <h2>Endereço</h2>
            <C.Form>
              <C.InputColumn
                style={{
                  width: "450px",
                }}
              >
                <label>Rua</label>
                <C.Input
                  type={"text"}
                  value={endereco.rua}
                  onChange={(e) =>
                    setEndereco({
                      ...endereco,
                      rua: e.target.value,
                    })
                  }
                />
              </C.InputColumn>

              <C.AreaInputsDisplayFlex
                style={{
                  gap: "1rem",
                }}
              >
                <C.InputColumn
                  style={{
                    width: "300px",
                  }}
                >
                  <label>Bairro</label>
                  <C.Input
                    type={"text"}
                    required
                    value={endereco.bairro}
                    onChange={(e) =>
                      setEndereco({
                        ...endereco,
                        bairro: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "300px",
                  }}
                >
                  <label>Município</label>
                  <C.Input
                    type={"text"}
                    value={endereco.municipio}
                    onChange={(e) =>
                      setEndereco({
                        ...endereco,
                        municipio: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>

              <C.AreaInputsDisplayFlex
                style={{
                  gap: "1rem",
                }}
              >
                <C.InputColumn
                  style={{
                    width: "200px",
                  }}
                >
                  <label>Telefone de Contato</label>
                  <C.Input
                    type={"text"}
                    required
                    value={endereco.telContato}
                    onChange={(e) =>
                      setEndereco({
                        ...endereco,
                        telContato: e.target.value,
                      })
                    }
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Localização</label>
                  <C.Select
                    value={endereco.localizacao}
                    onChange={(e) =>
                      setEndereco({
                        ...endereco,
                        localizacao: e.target.value,
                      })
                    }
                  >
                    <option value="urbano">Urbano</option>
                    <option value="rural">Rural</option>
                  </C.Select>
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>
            </C.Form>
          </C.AreaEndereco>

          <C.AreaCondicoesSaude ref={condicoesSaudeRef}>
            <h2>Condições de Saúde</h2>
            <C.Form>
              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Diagnóstico</label>
                <C.Input
                  type={"text"}
                  required
                  value={condicoesSaude.diagnostico}
                  onChange={(e) =>
                    setCondicoesSaude({
                      ...condicoesSaude,
                      diagnostico: e.target.value,
                    })
                  }
                />
              </C.InputColumn>
              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Tratamento</label>
                <C.Input
                  type={"text"}
                  value={condicoesSaude.tratamento}
                  onChange={(e) =>
                    setCondicoesSaude({
                      ...condicoesSaude,
                      tratamento: e.target.value,
                    })
                  }
                />
              </C.InputColumn>
              <C.InputColumn
                style={{
                  width: "500px",
                }}
              >
                <label>Medicamentos que faz uso e sua posologia</label>
                <C.TextArea
                  rows={5}
                  value={condicoesSaude.medicamentosUsoEaPosologia}
                  onChange={(e) =>
                    setCondicoesSaude({
                      ...condicoesSaude,
                      medicamentosUsoEaPosologia: e.target.value,
                    })
                  }
                />
              </C.InputColumn>
              <C.AreaInputsDisplayFlex
                style={{
                  gap: "1rem",
                }}
              >
                <C.InputColumn
                  style={{
                    width: "250px",
                  }}
                >
                  <label>Faz uso de fralda geriátrica?</label>
                  <C.Select
                    value={condicoesSaude.fralgaGeriatrica}
                    onChange={(e) =>
                      setCondicoesSaude({
                        ...condicoesSaude,
                        fralgaGeriatrica: e.target.value,
                      })
                    }
                    style={{
                      width: "200px",
                    }}
                  >
                    <option value={false}>Não</option>
                    <option value={true}>Sim</option>
                  </C.Select>
                </C.InputColumn>
                <C.InputColumn
                  style={{
                    width: "100px",
                  }}
                >
                  <label>Tamanho</label>
                  <C.Select
                    value={condicoesSaude.tamanho}
                    onChange={(e) =>
                      setCondicoesSaude({
                        ...condicoesSaude,
                        tamanho: e.target.value,
                      })
                    }
                  >
                    <option>PP</option>
                    <option>P</option>
                    <option>M</option>
                    <option>G</option>
                    <option>GG</option>
                    <option>XG</option>
                  </C.Select>
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>

              <C.InputColumn>
                <label>
                  Necessita de cuidados constantes de outra pessoa para realizar
                  atividades básicas, como, tomar banho, alimentar-se, ficar só
                  ou locomover-se em casa, etc.?{" "}
                </label>
                <C.Select
                  value={condicoesSaude.necessitaCuidadosConstantesOutraPessoa}
                  onChange={(e) =>
                    setCondicoesSaude({
                      ...condicoesSaude,
                      necessitaCuidadosConstantesOutraPessoa: e.target.value,
                    })
                  }
                  style={{
                    width: "100px",
                  }}
                >
                  <option value={false}>Não</option>
                  <option value={true}>Sim</option>
                </C.Select>
              </C.InputColumn>
              <C.InputColumn
                style={{
                  width: "300px",
                }}
              >
                {condicoesSaude.necessitaCuidadosConstantesOutraPessoa !==
                  false &&
                condicoesSaude.necessitaCuidadosConstantesOutraPessoa !==
                  "false" ? (
                  <>
                    <label>Responsável pelo cuidado?</label>
                    <C.Input
                      type={"text"}
                      required
                      maxLength={11}
                      value={condicoesSaude.responsavelCuidado}
                      onChange={(e) =>
                        setCondicoesSaude({
                          ...condicoesSaude,
                          responsavelCuidado: e.target.value,
                        })
                      }
                    />
                  </>
                ) : (
                  <div></div>
                )}
              </C.InputColumn>
            </C.Form>
          </C.AreaCondicoesSaude>

          <C.AreaCondicoesHabitacionais ref={condicoesHabitacionaisRef}>
            <h2>Condições Habitacionais</h2>

            <C.AreaInputsDisplayFlex
              style={{
                gap: "12rem",
              }}
            >
              <C.InputColumn>
                <label>Tipo de residência</label>
                <C.Select
                  value={condicoesHabitacionais.tipoResidencia}
                  onChange={(e) =>
                    setCondicoesHabitacionais({
                      ...condicoesHabitacionais,
                      tipoResidencia: e.target.value,
                    })
                  }
                  style={{
                    width: "8rem",
                  }}
                >
                  <option value="alugada">Alugada </option>
                  <option value="propria">Própria </option>
                  <option value="cedida">Cedida </option>
                  <option value="ocupada">Ocupada </option>
                </C.Select>
              </C.InputColumn>
              <C.InputColumn>
                <label>Possui acesso à energia elétrica? </label>
                <C.Select
                  value={condicoesHabitacionais.possuiEnergiaEletrica}
                  onChange={(e) =>
                    setCondicoesHabitacionais({
                      ...condicoesHabitacionais,
                      possuiEnergiaEletrica: e.target.value,
                    })
                  }
                  style={{
                    width: "15rem",
                  }}
                >
                  <option value={true}>Sim </option>
                  <option value={false}>Não </option>
                </C.Select>
              </C.InputColumn>
            </C.AreaInputsDisplayFlex>
            <C.AreaInputsDisplayFlex
              style={{
                gap: "9rem",
              }}
            >
              <C.InputColumn>
                <label>Possui água canalizada? </label>
                <C.Select
                  value={condicoesHabitacionais.possuiAguaCanalizada}
                  onChange={(e) =>
                    setCondicoesHabitacionais({
                      ...condicoesHabitacionais,
                      possuiAguaCanalizada: e.target.value,
                    })
                  }
                  style={{
                    width: "11rem",
                  }}
                >
                  <option value={true}>Sim </option>
                  <option value={false}>Não </option>
                </C.Select>
              </C.InputColumn>
              <C.InputColumn>
                <label>Escoamento sanitário: </label>
                <C.Select
                  value={condicoesHabitacionais.escoamentoSanitario}
                  onChange={(e) =>
                    setCondicoesHabitacionais({
                      ...condicoesHabitacionais,
                      escoamentoSanitario: e.target.value,
                    })
                  }
                  style={{
                    width: "15rem",
                  }}
                >
                  <option value="rede">Rede coletora de esgoto </option>
                  <option value="fossa">Fossa séptica ou rudimentar </option>
                  <option value="direto">
                    Direto para vala, rio, lago ou mar
                  </option>
                  <option value="semBanheiro">Domicilio sem banheiro </option>
                </C.Select>
              </C.InputColumn>
            </C.AreaInputsDisplayFlex>
            <C.InputColumn>
              <label>Existe coleta de lixo: </label>
              <C.Select
                value={condicoesHabitacionais.existeColetaLixo}
                onChange={(e) =>
                  setCondicoesHabitacionais({
                    ...condicoesHabitacionais,
                    existeColetaLixo: e.target.value,
                  })
                }
                style={{
                  width: "9rem",
                }}
              >
                <option value={true}>Sim </option>
                <option value={false}>Não </option>
              </C.Select>
            </C.InputColumn>
            <C.AreaInputsDisplayFlex
              style={{
                gap: "5rem",
              }}
            >
              <C.InputColumn>
                <label>Número de cômodos no domicílio</label>
                <C.Input
                  type={"number"}
                  value={condicoesHabitacionais.numeroComodosDomicilio}
                  onChange={(e) =>
                    setCondicoesHabitacionais({
                      ...condicoesHabitacionais,
                      numeroComodosDomicilio: e.target.value,
                    })
                  }
                />
              </C.InputColumn>
              <C.InputColumn>
                <label>Número de dormitórios</label>
                <C.Input
                  value={condicoesHabitacionais.numeroDormitorios}
                  onChange={(e) =>
                    setCondicoesHabitacionais({
                      ...condicoesHabitacionais,
                      numeroDormitorios: e.target.value,
                    })
                  }
                  type={"number"}
                  style={{
                    width: "10rem",
                  }}
                />
              </C.InputColumn>
            </C.AreaInputsDisplayFlex>

            <C.InputColumn>
              <label>
                O domicilio é localizado em área de risco de desabamento ou
                alagamento?{" "}
              </label>
              <C.Select
                value={condicoesHabitacionais.areaDesabamentoOuAlagamento}
                onChange={(e) =>
                  setCondicoesHabitacionais({
                    ...condicoesHabitacionais,
                    areaDesabamentoOuAlagamento: e.target.value,
                  })
                }
                style={{
                  width: "11rem",
                }}
              >
                <option value={false}>Não </option>
                <option value={true}>Sim </option>
              </C.Select>
            </C.InputColumn>
            <C.InputColumn>
              <label>
                O domicilio é localizado em área de difícil acesso geográfico?{" "}
              </label>
              <C.Select
                value={condicoesHabitacionais.areaDificilAcesso}
                onChange={(e) =>
                  setCondicoesHabitacionais({
                    ...condicoesHabitacionais,
                    areaDificilAcesso: e.target.value,
                  })
                }
                style={{
                  width: "10rem",
                }}
              >
                <option value={false}>Não </option>
                <option value={true}>Sim </option>
              </C.Select>
            </C.InputColumn>
            <C.InputColumn>
              <label>
                O domicilio é localizado em área com forte presença de
                conflito/violência?
              </label>
              <C.Select
                value={condicoesHabitacionais.areaFortePresencaConflito}
                onChange={(e) =>
                  setCondicoesHabitacionais({
                    ...condicoesHabitacionais,
                    areaFortePresencaConflito: e.target.value,
                  })
                }
                style={{
                  width: "10rem",
                }}
              >
                <option value={false}>Não </option>
                <option value={true}>Sim </option>
              </C.Select>
            </C.InputColumn>
          </C.AreaCondicoesHabitacionais>

          <C.ComposicaoCondicoes ref={composicaoCondicoesRef}>
            <h2>Composição Familiar e Condições de Rendimentos</h2>

            <Button title={"Adicionar membro"} fn={openModal} />

            {composicaoFamiliar.length > 0 && (
              <div>
                <TableViewComposicaoFamiliar
                  listComposicaoFamiliar={composicaoFamiliar}
                  fn={deleteMembroFamiliar}
                  setComposicaoFamiliar={setComposicaoFamiliar}
                />
              </div>
            )}

            {modalMembroFamiliaOpen && (
              <ModalMembroFamilia
                setModal={setModalMembroFamiliaOpen}
                setComposicaoFamiliar={setComposicaoFamiliar}
                composicaoFamiliar={composicaoFamiliar}
              />
            )}
          </C.ComposicaoCondicoes>
          <C.ProgramasSociais ref={programasSociaisRef}>
            <h2>Acesso a Programas Sociais</h2>

            <C.InputColumn>
              <label>
                A família ou algum de seus membros possui recebe algum
                benefício?
              </label>
              <C.Select
                style={{
                  width: "10rem",
                }}
                onChange={(e) =>
                  setAcessoProgramasSociais({
                    ...acessoProgramasSociais,
                    acesso: !acessoProgramasSociais.acesso,
                  })
                }
              >
                <option value={false}>Não </option>
                <option value={true}>Sim </option>
              </C.Select>
            </C.InputColumn>
            {acessoProgramasSociais.acesso !== false &&
            acessoProgramasSociais.acesso !== "false" ? (
              <>
                <div>
                  <input
                    type="checkbox"
                    checked={acessoProgramasSociais.bolsaFamilia}
                    onChange={(e) =>
                      setAcessoProgramasSociais({
                        ...acessoProgramasSociais,
                        bolsaFamilia: !acessoProgramasSociais.bolsaFamilia,
                      })
                    }
                  />
                  <label htmlFor="bolsaFamilia">
                    {" "}
                    Benefício do Programa Bolsa Família.
                  </label>
                  {acessoProgramasSociais.bolsaFamilia && (
                    <input
                      type="number"
                      value={acessoProgramasSociais.valorBolsaFamilia}
                      style={{
                        width: "60px",
                        padding: "1px",
                        background: "#000",
                      }}
                      onChange={(e) =>
                        setAcessoProgramasSociais({
                          ...acessoProgramasSociais,
                          valorBolsaFamilia: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={acessoProgramasSociais.prestacaoContinuadaBPC}
                    onChange={(e) =>
                      setAcessoProgramasSociais({
                        ...acessoProgramasSociais,
                        prestacaoContinuadaBPC:
                          !acessoProgramasSociais.prestacaoContinuadaBPC,
                      })
                    }
                  />
                  <label> Benefício de Prestação Continuada-BPC.</label>
                  {acessoProgramasSociais.prestacaoContinuadaBPC && (
                    <input
                      type="number"
                      value={acessoProgramasSociais.valorBPC}
                      style={{
                        width: "60px",
                        padding: "1px",
                        background: "#000",
                      }}
                      onChange={(e) =>
                        setAcessoProgramasSociais({
                          ...acessoProgramasSociais,
                          valorBPC: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={acessoProgramasSociais.outros}
                    onChange={(e) =>
                      setAcessoProgramasSociais({
                        ...acessoProgramasSociais,
                        outros: !acessoProgramasSociais.outros,
                      })
                    }
                  />
                  <label> Outros. Qual?</label>
                  {acessoProgramasSociais.outros && (
                    <input
                      type="number"
                      value={acessoProgramasSociais.valorOutros}
                      style={{
                        width: "60px",
                        padding: "1px",
                        background: "#000",
                      }}
                      onChange={(e) =>
                        setAcessoProgramasSociais({
                          ...acessoProgramasSociais,
                          valorOutros: e.target.value,
                        })
                      }
                    />
                  )}
                </div>
                {acessoProgramasSociais.outros ? (
                  <textarea
                    value={acessoProgramasSociais.descricao}
                    cols="40"
                    rows="3"
                    style={{
                      padding: "4px",
                      background: "#000",
                      color: "#F8F8F8",
                    }}
                    onChange={(e) =>
                      setAcessoProgramasSociais({
                        ...acessoProgramasSociais,
                        descricao: e.target.value,
                      })
                    }
                  ></textarea>
                ) : (
                  <div></div>
                )}
              </>
            ) : (
              <div></div>
            )}
          </C.ProgramasSociais>
        </C.Contentregistration>
      </C.AreaContent>
    </C.Container>
  );
}
