import * as C from "./styles";
import { BsFillEyeFill } from "react-icons/bs";

import { useParams } from "react-router-dom";

import { useInventarioContext } from "../../../hooks/useInventarioContext";
import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";

export function PageViewItem() {
  const { id } = useParams();
  const { listItens, getItemForId } = useInventarioContext();

  const [item, setItem] = useState({});

  useEffect(() => {
    if (listItens.length > 0) {
      setItem(getItemForId(id));
    } else {
      return;
    }
  }, [listItens]);

  return (
    <C.Container>
      {item.length > 0 && (
        <C.InventarioList>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>C.referência</th>
                <th>Quantidade</th>
                <th>Empréstimos</th>
                <th>Doados</th>
                <th>Disponivel</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr key={item[0].id}>
                <td>{item[0].nome}</td>
                <td>{item[0].codigoReferencia}</td>
                <td>{item[0].quantidade}</td>
                <td>{item[0].emprestimos}</td>
                <td>{item[0].doados}</td>
                <td>
                  {item[0].quantidade - item[0].emprestimos - item[0].doados}
                </td>
                <td>
                  {" "}
                  <C.Status
                    statusColor={
                      item[0].quantidade -
                        item[0].emprestimos -
                        item[0].doados >
                      0
                        ? "green"
                        : "red"
                    }
                  ></C.Status>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              margin: "1rem 0 2rem 0",
            }}
          >
            <C.AreaButton>
              <button
                disabled={
                  item[0].quantidade - item[0].emprestimos - item[0].doados > 0
                    ? false
                    : true
                }
                onClick={() => alert("dsadas")}
              >
                Conceder benefício
              </button>
            </C.AreaButton>
          </div>

          <h3>Empréstimo realizados</h3>
          <C.AreaEmprestimos>
            <C.AreaBeneficio>
              <div
                style={{
                  display: "flex",
                  gap: "3rem",
                }}
              >
                <div>
                  <strong>Nome</strong>: Michel Correa Martins
                  <p>
                    <strong>CPF</strong>: 12839520680
                  </p>
                </div>
                <div>
                  <strong>Item</strong>: Cadeira de rodas
                  <p>
                    <strong>Data</strong>: 13/11/2021
                  </p>
                </div>
              </div>
              <p
                style={{
                  marginBottom: "1.5rem",
                }}
              >
                <strong>Responsavel</strong>: Fulano da Silva
              </p>
              <Button title={"realizar devolução"} />
              <p>Devolvido em: 21/10/2022</p>
            </C.AreaBeneficio>
          </C.AreaEmprestimos>

          <h3>Doações realizadas</h3>
          <C.AreaDoacoes></C.AreaDoacoes>
        </C.InventarioList>
      )}
    </C.Container>
  );
}
