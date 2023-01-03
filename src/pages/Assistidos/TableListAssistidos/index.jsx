import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { Search } from "../../../components/Search";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useAssistidosContext } from "../../../hooks/useAssistidosContext";

export function TableListAssistidos({ listAssistidos }) {
  const navigate = useNavigate();

  const { deleteAssistido, getAllAssistidos } = useAssistidosContext();

  const [search, setSearch] = useState("");

  function handleViewAssistido(idAssistido) {
    navigate(`/assistidos/${idAssistido}`);
  }

  function handleGoToPageAddAssistido() {
    navigate(`/assistidos/adicionar`);
  }

  async function handleDeleteAssistido(id) {
    window.confirm("Confirmar exclusão ?") &&
      deleteAssistido(id).then(async () => {
        await getAllAssistidos();
      });
  }

  return (
    <C.Container>
      <C.AreaListAssistidos>
        <C.AreaSearchAndButtonAdd>
          <Search
            placeholder="Digite o nome do candidato"
            state={search}
            setSearch={setSearch}
          />
          <Button
            title={"Adicionar Assistido"}
            fn={handleGoToPageAddAssistido}
          />
        </C.AreaSearchAndButtonAdd>
        <C.AssistidosList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Municipio</th>
                <th>Tel</th>
                <th>Empréstimo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listAssistidos &&
                listAssistidos.map((assistido, index) => {
                  return (
                    <tr key={index}>
                      <td>{assistido.identificacao.nome}</td>

                      <td>{assistido.identificacao.cpf}</td>
                      <td>{assistido.endereco.municipio}</td>
                      <td>{assistido.endereco.telContato}</td>
                      <td>
                        <C.Status statusColor="red"></C.Status>
                      </td>
                      <td>
                        <C.AreaIcon
                          onClick={() => handleViewAssistido(assistido.id)}
                        >
                          <BsFillEyeFill
                            style={{
                              fontSize: "16px",
                              cursor: "pointer",
                              opacity: 0.75,
                            }}
                          />
                        </C.AreaIcon>
                        <C.AreaIcon
                          onClick={() => handleDeleteAssistido(assistido.id)}
                        >
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
        </C.AssistidosList>
      </C.AreaListAssistidos>
    </C.Container>
  );
}
