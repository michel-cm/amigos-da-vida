import "firebase/compat/firestore";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { database, firebase } from "./firebase";

export const Api = {
  getAllAssistidos: async () => {
    const list = [];

    let results = await getDocs(collection(database, "assistidos"));
    results.forEach((result) => {
      let data = result.data();
      list.push({
        id: result.id,
        identificacao: data.identificacao,
        endereco: data.endereco,
        condicoesSaude: data.condicoesSaude,
        condicoesHabitacionais: data.condicoesHabitacionais,
        composicaoFamiliar: data.composicaoFamiliar,
        acessoProgramasSociais: data.acessoProgramasSociais,
      });
    });
    return list;
  },

  /*identificacao,
  endereco,
  condicoesSaude,
  condicoesHabitacionais,
  composicaoFamiliar,
  acessoProgramasSociais,*/
  addNewAssistido: async (assistido) => {
    await database.collection("assistidos").doc().set(
      assistido
      /* {
        identificacao: {
          identificacao,
        },
        endereco: {
          endereco,
        },
        condicoesSaude: {
          condicoesSaude,
        },
        condicoesHabitacionais: {
          condicoesHabitacionais,
        },
        composicaoFamiliar: {
          composicaoFamiliar,
        },
        acessoProgramasSociais: {
          acessoProgramasSociais,
        },
      },*/
    );
  },

  updateAssistido: async (id, assistido) => {
    const exameRef = doc(database, "assistidos", id);
    await updateDoc(exameRef, {
      ...assistido,
    });
  },

  deleteAssistido: async (idAssistido) => {
    await deleteDoc(doc(database, "assistidos", idAssistido));
  },
};
