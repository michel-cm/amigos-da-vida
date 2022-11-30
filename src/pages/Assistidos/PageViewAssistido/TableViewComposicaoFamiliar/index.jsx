import * as C from "./styles";

import { BsFillTrashFill } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

export function TableViewComposicaoFamiliar({ listComposicaoFamiliar }) {
  const navigate = useNavigate();

  function handleViewAssistido(idAssistido) {
    navigate(`/assistidos/${idAssistido}`);
  }

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
      <C.AreaList>
        <C.MembrosList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>DN</th>
                <th>Parentesco</th>
                <th>Ocupação</th>
                <th>Renda</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listComposicaoFamiliar &&
                listComposicaoFamiliar.integrantes.map((membro, index) => {
                  return (
                    <tr key={index}>
                      <td>{membro.nome}</td>
                      <td>{membro.dataNasc}</td>
                      <td>{parentesco[membro.parentesco - 1]}</td>
                      <td>{membro.ocupacao}</td>
                      <td>{membro.renda}</td>
                      <td>
                        <C.AreaIcon onClick={() => handleViewAssistido(index)}>
                          <BsFillTrashFill
                            style={{
                              fontSize: "16px",
                              cursor: "pointer",
                              opacity: 0.75,
                              marginLeft: " 14px",
                            }}
                          />
                        </C.AreaIcon>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </C.MembrosList>
      </C.AreaList>
    </C.Container>
  );
}
