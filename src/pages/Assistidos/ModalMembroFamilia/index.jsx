import * as C from "./styles";
import { BsFillXCircleFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

import { useState } from "react";

export const ModalMembroFamilia = ({
  setModal,
  setComposicaoFamiliar,
  composicaoFamiliar,
}) => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleSetComposicaoFamiliar = () => {
    if (
      identificacao.nome &&
      identificacao.dataNasc &&
      identificacao.ocupacao
    ) {
      setModal(false);
      setComposicaoFamiliar((state) => [...state, identificacao]);
    } else {
      alert("Preencha todos os dados!");
    }
  };

  const [identificacao, setIdentificao] = useState({
    nome: "",
    dataNasc: "",
    parentesco: "",
    ocupacao: "",
    renda: "",
  });

  const parentesco = [
    "Cônjuge/companheiro ",
    "Filho",
    "Enteado",
    "Neto/Bisneto",
    "Pai/ Mãe",
    "Sogro",
    "Irmão",
    "Genro/Nora",
    "Outro parente",
    "Não parente",
  ];

  return (
    <C.Container>
      <C.Modal>
        <C.AreaClose>
          <BsFillXCircleFill
            style={{
              cursor: "pointer",
            }}
            onClick={handleCloseModal}
          />
        </C.AreaClose>

        <C.AreaIdentificacao>
          <h2>Adicionar Membro Familiar</h2>
          <C.Form>
            <C.AreaInputsDisplayFlex style={{ gap: "1rem" }}>
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
            </C.AreaInputsDisplayFlex>

            <C.AreaInputsDisplayFlex
              style={{
                gap: "1rem",
              }}
            >
              <C.InputColumn
                style={{
                  width: "105px",
                }}
              >
                <label>Parentesco</label>
                <C.Select
                  onChange={(e) =>
                    setIdentificao({
                      ...identificacao,
                      parentesco: e.target.value,
                    })
                  }
                >
                  {parentesco.map((item, index) => {
                    return <option key={index} value={index}>{item}</option>;
                  })}
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
                <label>Ocupação</label>
                <C.Input
                  type={"text"}
                  required
                  maxLength={11}
                  value={identificacao.ocupacao}
                  onChange={(e) =>
                    setIdentificao({
                      ...identificacao,
                      ocupacao: e.target.value,
                    })
                  }
                />
              </C.InputColumn>

              <C.InputColumn
                style={{
                  width: "180px",
                }}
              >
                <label>Renda</label>
                <C.Input
                  type={"numer"}
                  maxLength={12}
                  value={identificacao.renda}
                  onChange={(e) =>
                    setIdentificao({
                      ...identificacao,
                      renda: e.target.value,
                    })
                  }
                />
              </C.InputColumn>
            </C.AreaInputsDisplayFlex>
          </C.Form>
          <C.ButtonConfirm onClick={handleSetComposicaoFamiliar}>
            Adicionar
          </C.ButtonConfirm>
          <C.ButtonNot onClick={handleCloseModal}>Cancelar</C.ButtonNot>
        </C.AreaIdentificacao>
      </C.Modal>
    </C.Container>
  );
};
