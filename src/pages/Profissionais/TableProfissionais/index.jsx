import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { Search } from "../../../components/Search";

import { useState } from "react";

export function TableProfissionais() {
  const [search, setSearch] = useState("");

  return (
    <C.Container>
      <C.AreaListAssistidos>
        <Search
          placeholder="Digite o nome do profissional"
          state={search}
          setSearch={setSearch}
        />

        <C.AssistidosList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Área</th>
                <th>CPF</th>                
                <th>Tel</th>
                <th>Pacientes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulano da Silva Martins Costa </td>
                <td>Psicóloga</td>
                <td>128-385-000-00</td>
                <td>35-997065079</td>
                <td>15</td>                
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
              <tr>
                <td>Fulano da Silva Martins Costa </td>
                <td>Psicóloga</td>
                <td>128-385-000-00</td>
                <td>35-997065079</td>
                <td>15</td>                
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
