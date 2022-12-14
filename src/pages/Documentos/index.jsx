import * as C from "./styles";

import { Card } from "../../components/Card";
import { TableDocs } from "./TableDocs";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebase";

import { useStorageContext } from "../../hooks/useStorageContext";

import { Button } from "../../components/Button";

export function Documentos() {
  const { categorias } = useStorageContext();
  const [imgExist, setImgExist] = useState({});

  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = (event, pasta) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `${pasta}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          handleCancelStorage()
        });
      }
    );
  };

  const handleCancelStorage = () => {
    setImgExist("");
    setImgURL("");
    setProgress(0);
  };

  return (
    <C.Container>
      <h2>Inventário</h2>
      <C.AreaCardsResume>
        <Card
          title={"Documentos"}
          color={"#E2992B"}
          value={categorias.length > 0 ? categorias.length : 0}
        />
      </C.AreaCardsResume>
      <C.AreaButtons>
        <Button title={"Adicionar categoria"} />
      </C.AreaButtons>
      {categorias.length > 0 &&
        categorias.map((categoria) => {
          return (
            <C.AreaGroup key={categoria.id}>
              <h3>{categoria.categoria}</h3>
              <TableDocs />
              <form onSubmit={(e) => handleUpload(e, categoria.categoria)}>
                <C.AreaInputFile>
                  <label htmlFor={categoria.categoria}>Enviar arquivo</label>
                  <input
                    type="file"
                    name={categoria.categoria}
                    id={categoria.categoria}
                    onChange={(e) =>
                      setImgExist({
                        img: e.target.value,
                        categoriaInput: categoria.categoria,
                      })
                    }
                  />
                  {imgExist?.categoriaInput == categoria.categoria &&
                    imgExist.img}
                </C.AreaInputFile>

                {imgExist?.categoriaInput == categoria.categoria && (
                  <progress value={progress} max="100" />
                )}
                {imgExist?.categoriaInput == categoria.categoria && (
                  <C.AreaButtonsStorage>
                    <C.ButtonEnviarStorage type="submit">
                      Enviar Arquivo
                    </C.ButtonEnviarStorage>
                    <C.ButtonCancelarStorage
                      type="submit"
                      onClick={handleCancelStorage}
                    >
                      Cancelar
                    </C.ButtonCancelarStorage>
                  </C.AreaButtonsStorage>
                )}
              </form>
            </C.AreaGroup>
          );
        })}
    </C.Container>
  );
}
