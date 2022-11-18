import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { Search } from "../../../components/Search";

import { useState } from "react";

export function TableDocs() {
  const [search, setSearch] = useState("");

  return (
    <C.Container>
      <C.AreaListAssistidos>
        <Search
          placeholder="Digite o nome do documento"
          state={search}
          setSearch={setSearch}
        />

        <C.AssistidosList>
          <table>
            <thead>
              <tr>
                <th>Documento</th>
                <th>C.referência</th>
                <th>D.R</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resumo Assistidos</td>
                <td>1345</td>
                <td>13/11/2022</td>
                <td>
                  {" "}
                  <C.AreaIcon
                    onClick={() => handleViewCandidate(candidate.email)}
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
