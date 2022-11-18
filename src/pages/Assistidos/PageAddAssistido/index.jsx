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
      window.scrollY < endereco.current.offsetTop
    ) {
      setActiveIdentificacao("active");
    } else {
      setActiveIdentificacao("disable");
    }

    if (
      window.scrollY >= endereco.current.offsetTop &&
      window.scrollY < condicoesSaude.current.offsetTop
    ) {
      setActiveEndereco("active");
    } else {
      setActiveEndereco("disable");
    }
    if (
      window.scrollY >= condicoesSaude.current.offsetTop &&
      window.scrollY < condicoesHabitacionais.current.offsetTop
    ) {
      setActiveCondicoesSaude("active");
    } else {
      setActiveCondicoesSaude("disable");
    }
    if (
      window.scrollY >= condicoesHabitacionais.current.offsetTop &&
      window.scrollY < programasSociais.current.offsetTop
    ) {
      setActiveCondicoesHabitacionais("active");
    } else {
      setActiveCondicoesHabitacionais("disable");
    }
    if (window.scrollY >= programasSociais.current.offsetTop) {
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
          <div ref={identificacao}>1</div>
          <div ref={endereco}>2</div>
          <div ref={condicoesSaude}>3</div>
          <div ref={condicoesHabitacionais}>4</div>
          <div ref={programasSociais}>5</div>
        </C.Contentregistration>
      </C.AreaContent>
    </C.Container>
  );
}
