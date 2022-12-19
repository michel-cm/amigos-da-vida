import * as C from "./styles";

import { BsFillTrashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

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
      <C.MembrosList>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>DN</th>
              <th>Parentesco</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listComposicaoFamiliar &&
              listComposicaoFamiliar.map((membro, index) => {
                return (
                  <tr key={index}>
                    <td>{membro.nome}</td>
                    <td>{membro.dataNasc}</td>
                    <td>
                      <C.Select value={membro.parentesco } disabled>
                        {parentesco.map((item, index) => {
                          return <option value={index}>{item}</option>;
                        })}
                      </C.Select>
                    </td>
                    <td>
                      <C.AreaIcon onClick={() => handleViewAssistido(index)}>
                        <BsFillEyeFill
                          style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            opacity: 0.75,
                          }}
                        />
                      </C.AreaIcon>
                    </td>
                    <td>
                      <C.AreaIcon onClick={() => handleViewAssistido(index)}>
                        <BsFillTrashFill
                          style={{
                            fontSize: "16px",
                            cursor: "pointer",
                            opacity: 0.75,
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
    </C.Container>
  );
}
