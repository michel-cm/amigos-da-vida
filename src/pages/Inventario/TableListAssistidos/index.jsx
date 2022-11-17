import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { Search } from "../../../components/Search";

import { useState } from "react";

export function TableListAssistidos() {
  const [search, setSearch] = useState("");

  return (
    <C.Container>
      <C.AreaListAssistidos>
        <Search
          placeholder="Digite o nome do equipamento"
          state={search}
          setSearch={setSearch}
        />

        <C.AssistidosList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>D.R</th>
                <th>C.referência</th>
                <th>Quantidade</th>
                <th>Empréstimos</th>
                <th>Disponivel</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cadeira de rodas </td>
                <td>13/11/2022</td>
                <td>1345</td>
                <td>7</td>
                <td>3</td>
                <td>4</td>
                <td>
                  {" "}
                  <C.Status statusColor="green"></C.Status>
                </td>
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
                <td>Cama hospitalar</td>
                <td>13/11/2022</td>
                <td>1345</td>
                <td>7</td>
                <td>7</td>
                <td>-</td>
                <td>
                  {" "}
                  <C.Status statusColor="red"></C.Status>
                </td>
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
                <td>Cadeira de rodas </td>
                <td>13/11/2022</td>
                <td>1345</td>
                <td>7</td>
                <td>3</td>
                <td>4</td>
                <td>
                  {" "}
                  <C.Status statusColor="green"></C.Status>
                </td>
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
                <td>Cadeira de rodas </td>
                <td>13/11/2022</td>
                <td>1345</td>
                <td>7</td>
                <td>3</td>
                <td>4</td>
                <td>
                  {" "}
                  <C.Status statusColor="green"></C.Status>
                </td>
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
                <td>Cadeira de rodas </td>
                <td>13/11/2022</td>
                <td>1345</td>
                <td>7</td>
                <td>3</td>
                <td>4</td>
                <td>
                  {" "}
                  <C.Status statusColor="green"></C.Status>
                </td>
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
