import * as C from "./styles";
import { useRef, useState } from "react";
import { Button } from "../../../components/Button";

export function PageAddAssistido() {
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
    if (window.scrollY >= programasSociaisRef.current.offsetTop - 180) {
      setActiveProgramasSociais("active");
    } else {
      setActiveProgramasSociais("disable");
    }
  };

  window.addEventListener("scroll", verifyScrollSection);
  /* SCROLL /\ */

  const [identificacao, setIdentificao] = useState({
    nome: "",
    nomeMae: "",
    dataNasc: "",
    nascidoEm: "",
    estadoCivil: "solteiro",
    cpf: "",
    rg: "",
  });

  console.log(identificacao);
  return (
    <C.Container>
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
            <Button title={"Adicionar assistido"} />
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
                <label>Endereço</label>
                <C.Input type={"text"} />
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
                  <C.Input type={"text"} required />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "300px",
                  }}
                >
                  <label>Município</label>
                  <C.Input type={"text"} />
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
                  <C.Input type={"text"} required />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Localização</label>
                  <C.Select>
                    <option>Urbano</option>
                    <option>Rural</option>
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
                <C.Input type={"text"} required />
              </C.InputColumn>
              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Tratamento</label>
                <C.Input type={"text"} />
              </C.InputColumn>
              <C.InputColumn
                style={{
                  width: "500px",
                }}
              >
                <label>Medicamentos que faz uso e sua posologia</label>
                <C.TextArea rows={5} />
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
                    style={{
                      width: "200px",
                    }}
                  >
                    <option>Não</option>
                    <option>Sim</option>
                  </C.Select>
                </C.InputColumn>
                <C.InputColumn
                  style={{
                    width: "100px",
                  }}
                >
                  <label>Tamanho</label>
                  <C.Select>
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
                  style={{
                    width: "100px",
                  }}
                >
                  <option>Não</option>
                  <option>Sim</option>
                </C.Select>
              </C.InputColumn>
              <C.InputColumn
                style={{
                  width: "300px",
                }}
              >
                <label>Responsável pelo cuidado?</label>
                <C.Input type={"text"} required maxLength={11} />
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
                  style={{
                    width: "8rem",
                  }}
                >
                  <option>Alugada </option>
                  <option>Própria </option>
                  <option>Cedida </option>
                  <option>Ocupada </option>
                </C.Select>
              </C.InputColumn>
              <C.InputColumn>
                <label>Possui acesso à energia elétrica? </label>
                <C.Select
                  style={{
                    width: "15rem",
                  }}
                >
                  <option>Sim </option>
                  <option>Não </option>
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
                  style={{
                    width: "11rem",
                  }}
                >
                  <option>Sim </option>
                  <option>Não </option>
                </C.Select>
              </C.InputColumn>
              <C.InputColumn>
                <label>Escoamento sanitário: </label>
                <C.Select
                  style={{
                    width: "15rem",
                  }}
                >
                  <option>Rede coletora de esgoto </option>
                  <option>Fossa séptica ou rudimentar </option>
                  <option>Direto para vala, rio, lago ou mar </option>
                  <option>Domicilio sem banheiro </option>
                </C.Select>
              </C.InputColumn>
            </C.AreaInputsDisplayFlex>
            <C.InputColumn>
              <label>Existe coleta de lixo: </label>
              <C.Select
                style={{
                  width: "9rem",
                }}
              >
                <option>Sim </option>
                <option>Não </option>
              </C.Select>
            </C.InputColumn>
            <C.AreaInputsDisplayFlex
              style={{
                gap: "5rem",
              }}
            >
              <C.InputColumn>
                <label>Número de cômodos no domicílio</label>
                <C.Input type={"number"} />
              </C.InputColumn>
              <C.InputColumn>
                <label>Número de dormitórios</label>
                <C.Input
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
                style={{
                  width: "11rem",
                }}
              >
                <option>Não </option>
                <option>Sim </option>
              </C.Select>
            </C.InputColumn>
            <C.InputColumn>
              <label>
                O domicilio é localizado em área de difícil acesso geográfico?{" "}
              </label>
              <C.Select
                style={{
                  width: "10rem",
                }}
              >
                <option>Não </option>
                <option>Sim </option>
              </C.Select>
            </C.InputColumn>
            <C.InputColumn>
              <label>
                O domicilio é localizado em área com forte presença de
                conflito/violência?
              </label>
              <C.Select
                style={{
                  width: "10rem",
                }}
              >
                <option>Não </option>
                <option>Sim </option>
              </C.Select>
            </C.InputColumn>
          </C.AreaCondicoesHabitacionais>

          <C.ComposicaoCondicoes ref={composicaoCondicoesRef}>
            <h2>Composição Familiar e Condições de Rendimentos</h2>

            <Button title={"Adicionar membro"} />
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
              >
                <option>Não </option>
                <option>Sim </option>
              </C.Select>
            </C.InputColumn>
            <Button title={"Cadastrar Benefício"} />
          </C.ProgramasSociais>
        </C.Contentregistration>
      </C.AreaContent>
    </C.Container>
  );
}
