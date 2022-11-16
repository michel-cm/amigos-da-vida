import * as C from "./styles";
import cancer from "../../assets/cancer.png";
import inventario from "../../assets/inventario.png";
import inventario2 from "../../assets/inventario2.png";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";

import { Card } from "../../components/Card";

import { BsChevronRight } from "react-icons/bs";

export function Home() {
  return (
    <>
      <C.AreaCardsResume>
        <Card title={"Assistidos"} color={"#FC5A5A"} value={105} />
        <Card title={"Inventário"} color={"#E2992B"} value={47} />
        <Card title={"Empréstimos"} color={"#3AB04D"} value={23} />
        <Card title={"Profissionais"} color={"#2261BC"} value={3} />
      </C.AreaCardsResume>

      <C.ContainerAreaCardsButtons>
        <C.ContentAreaCardsButtons>
          <h4>Cadastro rápido</h4>
          <C.AreaCardsButtons>
            <C.CardButton>
              <img src={cancer} />
              <p>assistido</p>
              <BsChevronRight />
            </C.CardButton>
            <C.CardButton>
              <img src={inventario2} />
              <p>equipamento</p>
              <BsChevronRight />
            </C.CardButton>
            <C.CardButton>
              <img src={inventario} />
              <p>empréstimo</p>
              <BsChevronRight />
            </C.CardButton>
          </C.AreaCardsButtons>
        </C.ContentAreaCardsButtons>
      </C.ContainerAreaCardsButtons>

      <C.ContainerSearch>
        <C.AreaListAssistidos>
          <h1>Assistidos</h1>

          <C.AssistidosList>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Início</th>
                  <th>Tel</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Fulano da Silva Martins Costa </td>
                  <td>13/11/2022</td>
                  <td>35-997065079</td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </C.AssistidosList>
        </C.AreaListAssistidos>
        <C.AreaInventario>
          <h1>Inventário</h1>

          <C.InventarioList>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Disponível</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cadeira de rodas</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Cadeira de rodas</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Cadeira de rodas</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Cadeira de rodas</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Cadeira de rodas</td>
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
                  </td>
                </tr>
                <tr>
                  <td>Cadeira de rodas</td>
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
                  </td>
                </tr>
              </tbody>
            </table>
          </C.InventarioList>
        </C.AreaInventario>
      </C.ContainerSearch>
    </>
  );
}
