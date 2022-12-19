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

  addNewAssistido: async ({
    identificacao,
    endereco,
    condicoesSaude,
    condicoesHabitacionais,
    composicaoFamiliar,
    acessoProgramasSociais,
  }) => {
    await database.collection("assistidos").doc().set(
      {
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
      },
      { merge: true }
    );
  },

  /*
  updateAssistido: async (question, id) => {
    const questionRef = doc(database, "questions", id);
    await updateDoc(questionRef, {
      title: question.title,
      a: question.a,
      b: question.b,
      c: question.c,
      d: question.d,
      active: question.active,
    });
  },
  */
};
