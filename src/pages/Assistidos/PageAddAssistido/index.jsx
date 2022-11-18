import * as C from "./styles";
import { useRef, useState } from "react";

export function PageAddAssistido() {
  const identificacao = useRef(null);
  const endereco = useRef(null);
  const condicoesSaude = useRef(null);
  const condicoesHabitacionais = useRef(null);
  const programasSociais = useRef(null);

  const [activeIdentificacao, setActiveIdentificacao] = useState("active");
  const [activeEndereco, setActiveEndereco] = useState("disable");
  const [activeCondicoesSaude, setActiveCondicoesSaude] = useState("disable");
  const [activeCondicoesHabitacionais, setActiveCondicoesHabitacionais] =
    useState("disable");
  const [activeProgramasSociais, setActiveProgramasSociais] =
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
      window.scrollY < programasSociais.current.offsetTop - 80
    ) {
      setActiveCondicoesHabitacionais("active");
    } else {
      setActiveCondicoesHabitacionais("disable");
    }
    if (window.scrollY >= programasSociais.current.offsetTop - 80) {
      setActiveProgramasSociais("active");
    } else {
      setActiveProgramasSociais("disable");
    }
  };

  window.addEventListener("scroll", verifyScrollSection);

  return (
    <C.Container>
      <h2>Adicionar Assistido</h2>
      <C.AreaContent>
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
            className={activeProgramasSociais}
            onClick={() => scrollToSection(programasSociais)}
          >
            Programas sociais
          </a>
        </C.ContentInformations>
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
                <C.Input type={"text"} required />
              </C.InputColumn>

              <C.InputColumn
                style={{
                  width: "350px",
                }}
              >
                <label>Nome da mãe</label>
                <C.Input type={"text"} />
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
                  <C.Input type={"date"} required />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "300px",
                  }}
                >
                  <label>Nascido em</label>
                  <C.Input type={"text"} />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Estado Civil</label>
                  <C.Select>
                    <option>Solteiro</option>
                    <option>Casado</option>
                    <option>Viúvo</option>
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
                  <C.Input type={"text"} required maxLength={11} />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "180px",
                  }}
                >
                  <label>RG</label>
                  <C.Input type={"text"} maxLength={12} />
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
                    width: "300px",
                  }}
                >
                  <label>Localização</label>
                  <C.Input type={"text"} />
                </C.InputColumn>

                <C.InputColumn
                  style={{
                    width: "105px",
                  }}
                >
                  <label>Estado Civil</label>
                  <C.Select>
                    <option>Urbano</option>
                    <option>Rural</option>
                  </C.Select>
                </C.InputColumn>
              </C.AreaInputsDisplayFlex>
            </fomr>
          </C.AreaEndereco>
          <C.AreaCondicoesSaude ref={condicoesSaude}>
            <h2>Condições de Saúde</h2>
          </C.AreaCondicoesSaude>
          <C.AreaCondicoesHabitacionais ref={condicoesHabitacionais}>
            <h2>Condições Habitacionais</h2>
          </C.AreaCondicoesHabitacionais>
          <C.ProgramasSociais ref={programasSociais}>
            <h2>Acesso a Programas Sociais</h2>
          </C.ProgramasSociais>
        </C.Contentregistration>
      </C.AreaContent>
    </C.Container>
  );
}
