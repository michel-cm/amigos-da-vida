import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { Search } from "../../../components/Search";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";

export function TableListAssistidos() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function handleViewAssistido(idAssistido) {
    navigate(`/assistidos/${idAssistido}`);
  }

  function handleGoToPageAddAssistido() {
    navigate(`/assistidos/adicionar`);
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
                <th>D.N</th>
                <th>CPF</th>
                <th>Responsável</th>
                <th>Tel</th>
                <th>Empréstimo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulaninhoo da Silva Lopes</td>
                <td>01/06/2017</td>
                <td>128-385-000-00</td>
                <td>Fulana da Silva Lopes</td>
                <td>35-999999999</td>
                <td>
                  {" "}
                  <C.Status statusColor="red"></C.Status>
                </td>
                <td>
                  {" "}
                  <C.AreaIcon onClick={() => handleViewAssistido(1)}>
                    <BsFillEyeFill
                      style={{
                        fontSize: "16px",
                        cursor: "pointer",
                        opacity: 0.75,
                      }}
                    />
                  </C.AreaIcon>
                  <C.AreaIcon
                    onClick={() => handleViewCandidate(candidate.email)}
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
            </tbody>
          </table>
        </C.AssistidosList>
      </C.AreaListAssistidos>
    </C.Container>
  );
}
