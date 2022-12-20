import * as C from "./styles";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

import { Search } from "../../../components/Search";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TableListInventario({ setModal, list }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleViewItem(idItem) {
    navigate(`/inventario/${idItem}`);
  }

  function handleDeleteItem() {
    setModal(true);
  }

  return (
    <C.Container>
      <C.AreaItemList>
        <Search
          placeholder="Digite o nome do equipamento"
          state={search}
          setSearch={setSearch}
        />

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
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.length > 0 &&
                list.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.nome}</td>
                      <td>{item.codigoReferencia}</td>
                      <td>{item.quantidade}</td>
                      <td>{item.emprestimos}</td>
                      <td>{item.doados}</td>
                      <td>
                        {item.quantidade - item.emprestimos - item.doados}
                      </td>
                      <td>
                        {" "}
                        <C.Status
                          statusColor={
                            item.quantidade - item.emprestimos - item.doados > 0
                              ? "green"
                              : "red"
                          }
                        ></C.Status>
                      </td>
                      <td>
                        {" "}
                        <C.AreaIcon onClick={() => handleViewItem(item.id)}>
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
                        {" "}
                        <C.AreaIcon onClick={handleDeleteItem}>
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
        </C.InventarioList>
      </C.AreaItemList>
    </C.Container>
  );
}
