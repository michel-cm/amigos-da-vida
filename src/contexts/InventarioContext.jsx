import { useCallback, createContext, useEffect, useState } from "react";

export const InventarioContext = createContext({});

import { Api } from "../services/Api";

const inventario = [
  {
    id: "32324ffsdf",
    nome: "Cama inclinável",
    codigoReferencia: "a135",
    quantidade: 8,
    emprestimos: 4,
    doados: 4,
    emprestimosFeitos: [],
    doacoesFeitas: [],
    beneficioBendente: false,
  },
  {
    id: "324ffsdf",
    nome: "Cadeira de rodas",
    codigoReferencia: "a235",
    quantidade: 12,
    emprestimos: 3,
    doados: 6,
    emprestimosFeitos: [],
    doacoesFeitas: [],
    beneficioBendente: true,
  },
];

export function InventarioContextProvider({ children }) {
  const [listItens, setListItens] = useState([]);

  const getAllItens = useCallback(async () => {
    await Api.getAllItens().then((data) => {
      setListItens(data);
    });
  }, []);

  useEffect(() => {
    if (listItens.length === 0) {
      setListItens(inventario);
    }
  }, [listItens]);

  async function addNewItem(item) {
    await Api.addNewItem(item).catch((err) => console.log(err));
  }

  function getItemForId(id) {
    const itemFiltered = listItens.filter((item) => {
      return item.id == id;
    });
    return itemFiltered;
  }

  return (
    <InventarioContext.Provider
      value={{
        listItens,
        getAllItens,
        getItemForId,
      }}
    >
      {children}
    </InventarioContext.Provider>
  );
}
