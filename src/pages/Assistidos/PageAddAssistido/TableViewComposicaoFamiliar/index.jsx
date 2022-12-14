import * as C from "./styles";

import { BsFillTrashFill } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

import { formateValue } from "../../../../helpers/formateValue";

export function TableViewComposicaoFamiliar({
  listComposicaoFamiliar,
  setComposicaoFamiliar,
  fn,
  handleViewMembroFamilia,
}) {
  function handleDeleteMembroFamiliar(index) {
    setComposicaoFamiliar(fn(listComposicaoFamiliar, index));
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
              <th>Ocupação</th>
              <th>Renda</th>
              <th>Parentesco</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listComposicaoFamiliar.length > 0 &&
              listComposicaoFamiliar.map((membro, index) => {
                return (
                  <tr key={index}>
                    <td>{membro.nome}</td>
                    <td>{membro.ocupacao}</td>
                    <td>{formateValue(parseInt(membro.renda))}</td>
                    <td>
                      <C.Select value={membro.parentesco} readOnly>
                        {parentesco.map((item, index) => {
                          return (
                            <option key={index} value={index}>
                              {item}
                            </option>
                          );
                        })}
                      </C.Select>
                    </td>
                    <td>
                      <C.AreaIcon
                        onClick={() => handleViewMembroFamilia(index)}
                      >
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
                      <C.AreaIcon
                        onClick={() => handleDeleteMembroFamiliar(index)}
                      >
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
