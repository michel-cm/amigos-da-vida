import * as C from "./styles";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Button } from "../../../components/Button";

import { useAssistidosContext } from "../../../hooks/useAssistidosContext";

import { getAssistidos } from "../../../helpers/dataAssistido";

export function PageViewAssistido() {
  const { id } = useParams();

  const identificacao = useRef(0);
  const endereco = useRef(0);
  const condicoesSaude = useRef(0);
  const condicoesHabitacionais = useRef(0);
  const composicaoCondicoes = useRef(0);
  const programasSociais = useRef(0);

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
      window.scrollY <= identificacao.current.offsetTop ||
      window.scrollY < endereco.current.offsetTop - 80
    ) {
      setActiveIdentificacao("active");
    } else {
      setActiveIdentificacao("disable");
    }

    if (
      window.scrollY >= endereco.current.offsetTop - 80 &&
      window.scrollY < condicoesSaude.current.offsetTop - 80
    ) {
      setActiveEndereco("active");
    } else {
      setActiveEndereco("disable");
    }
    if (
      window.scrollY >= condicoesSaude.current.offsetTop - 80 &&
      window.scrollY < condicoesHabitacionais.current.offsetTop - 80
    ) {
      setActiveCondicoesSaude("active");
    } else {
      setActiveCondicoesSaude("disable");
    }
    if (
      window.scrollY >= condicoesHabitacionais.current.offsetTop - 80 &&
      window.scrollY < composicaoCondicoes.current.offsetTop - 80
    ) {
      setActiveCondicoesHabitacionais("active");
    } else {
      setActiveCondicoesHabitacionais("disable");
    }
    if (
      window.scrollY >= composicaoCondicoes.current.offsetTop - 80 &&
      window.scrollY < programasSociais.current.offsetTop - 180
    ) {
      setActiveComposicaoCondicoes("active");
    } else {
      setActiveComposicaoCondicoes("disable");
    }
    if (window.scrollY >= programasSociais.current.offsetTop - 180) {
      setActiveProgramasSociais("active");
    } else {
      setActiveProgramasSociais("disable");
    }
  };

  window.addEventListener("scroll", verifyScrollSection);

  return (
    <C.Container>
      <C.AreaContent>
        <C.Aside>
          <C.ContentInformations>
            <a
              className={activeIdentificacao}
              onClick={() => scrollToSection(identificacao)}
            >
              Identificação
            </a>
            <a
              className={activeEndereco}
              onClick={() => scrollToSection(endereco)}
            >
              Endereço
            </a>
            <a
              className={activeCondicoesSaude}
              onClick={() => scrollToSection(condicoesSaude)}
            >
              Condições de saúde
            </a>
            <a
              className={activeCondicoesHabitacionais}
              onClick={() => scrollToSection(condicoesHabitacionais)}
            >
              Condições Habitacionais
            </a>
            <a
              className={activeComposicaoCondicoes}
              onClick={() => scrollToSection(composicaoCondicoes)}
            >
              Composição e Rendimentos
            </a>
            <a
              className={activeProgramasSociais}
              onClick={() => scrollToSection(programasSociais)}
            >
              Programas sociais
            </a>
          </C.ContentInformations>
          <C.AreaButtonMenu>
            <Button title={"Salvar"} />
          </C.AreaButtonMenu>
          <C.AreaButtonMenu>
            <Button title={"Voltar"} type={"cancel"} />
          </C.AreaButtonMenu>
        </C.Aside>
        <C.Contentregistration>
          <C.AreaIdentificacao ref={identificacao}>
            <h2>Identificação</h2>
            <fomr>
              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Nome</label>
                <C.Input
                  type={"text"}
                  required
                  value={assistidos[id].identificacao.nome}
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
                  value={assistidos[id].identificacao.nomeMae}
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
                  <C.Input type={"date"} required value="2017-06-01" />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "300px",
                  }}
                >
                  <label>Nascido em</label>
                  <C.Input
                    type={"text"}
                    value={assistidos[id].identificacao.nascidoEm}
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Estado Civil</label>
                  <C.Select value={assistidos[id].identificacao.estadoCivil}>
                    <option value={"solteiro"}>Solteiro</option>
                    <option value={"casado"}>Casado</option>
                    <option value={"viuvo"}>Viúvo</option>
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
                    value={assistidos[id].identificacao.cpf}
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
                    value={assistidos[id].identificacao.rg}
                  />
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>
            </fomr>
          </C.AreaIdentificacao>

          <C.AreaEndereco ref={endereco}>
            <h2>Endereço</h2>
            <fomr>
              <C.InputColumn
                style={{
                  width: "450px",
                }}
              >
                <label>Endereço</label>
                <C.Input type={"text"} value={assistidos[id].endereco.rua} />
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
                    value={assistidos[id].endereco.bairro}
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
                    value={assistidos[id].endereco.municipio}
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
                    value={assistidos[id].endereco.telContato}
                  />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Localização</label>
                  <C.Select value={assistidos[id].endereco.localizacao}>
                    <option value="urbano">Urbano</option>
                    <option value="rural">Rural</option>
                  </C.Select>
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>
            </fomr>
          </C.AreaEndereco>
          <C.AreaCondicoesSaude ref={condicoesSaude}>
            <h2>Condições de Saúde</h2>
            <fomr>
              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Diagnóstico</label>
                <C.Input
                  type={"text"}
                  required
                  value={assistidos[id].condicoesSaude.diagnostico}
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
                  value={assistidos[id].condicoesSaude.tratamento}
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
                  value={
                    assistidos[id].condicoesSaude.medicamentosUsoEaPosologia
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
                    value={assistidos[id].condicoesSaude.fralgaGeriatrica}
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
                  <C.Select value={assistidos[id].condicoesSaude.tamanho}>
                    <option value="pp">PP</option>
                    <option value="p">P</option>
                    <option value="m">M</option>
                    <option value="g">G</option>
                    <option value="gg">GG</option>
                    <option value="xg">XG</option>
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
                  value={
                    assistidos[id].condicoesSaude
                      .necessitaCuidadosConstantesOutraPessoa
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
                <label>Responsável pelo cuidado?</label>
                <C.Input
                  type={"text"}
                  required
                  maxLength={11}
                  value={assistidos[id].condicoesSaude.responsavelCuidado}
                />
              </C.InputColumn>
            </fomr>
          </C.AreaCondicoesSaude>

          <C.AreaCondicoesHabitacionais ref={condicoesHabitacionais}>
            <h2>Condições Habitacionais</h2>

            <C.AreaInputsDisplayFlex
              style={{
                gap: "12rem",
              }}
            >
              <C.InputColumn>
                <label>Tipo de residência</label>
                <C.Select
                  value={assistidos[id].condicoesHabitacionais.tipoResidencia}
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
                  value={
                    assistidos[id].condicoesHabitacionais.possuiEnergiaEletrica
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
                  value={
                    assistidos[id].condicoesHabitacionais.possuiAguaCanalizada
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
                  value={
                    assistidos[id].condicoesHabitacionais.escoamentoSanitario
                  }
                  style={{
                    width: "15rem",
                  }}
                >
                  <option value="rede">Rede coletora de esgoto </option>
                  <option value="fossa">Fossa séptica ou rudimentar </option>
                  <option value="direto">
                    Direto para vala, rio, lago ou mar{" "}
                  </option>
                  <option value="semBanheiro">Domicilio sem banheiro </option>
                </C.Select>
              </C.InputColumn>
            </C.AreaInputsDisplayFlex>
            <C.InputColumn>
              <label>Existe coleta de lixo: </label>
              <C.Select
                value={assistidos[id].condicoesHabitacionais.existeColetaLixo}
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
                  value={
                    assistidos[id].condicoesHabitacionais.numeroComodosDomicilio
                  }
                />
              </C.InputColumn>
              <C.InputColumn>
                <label>Número de dormitórios</label>
                <C.Input
                  value={
                    assistidos[id].condicoesHabitacionais.numeroDormitorios
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
                value={
                  assistidos[id].condicoesHabitacionais
                    .areaDesabamentoOuAlagamento
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
                value={assistidos[id].condicoesHabitacionais.areaDificilAcesso}
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
                value={
                  assistidos[id].condicoesHabitacionais
                    .areaFortePresencaConflito
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

          <C.ComposicaoCondicoes ref={composicaoCondicoes}>
            <h2>Composição Familiar e Condições de Rendimentos</h2>

            <Button title={"Adicionar membro"} />
          </C.ComposicaoCondicoes>
          <C.ProgramasSociais ref={programasSociais}>
            <h2>Acesso a Programas Sociais</h2>

            <C.InputColumn>
              <label>
                A família ou algum de seus membros possui recebe algum
                benefício?
              </label>
              <C.Select
                value={assistidos[id].acessoProgramasSociais.acesso}
                style={{
                  width: "10rem",
                }}
              >
                <option value={false}>Não </option>
                <option value={true}>Sim </option>
              </C.Select>
            </C.InputColumn>
            <Button title={"Cadastrar Benefício"} />
          </C.ProgramasSociais>
        </C.Contentregistration>
      </C.AreaContent>
    </C.Container>
  );
}
