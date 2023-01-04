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
  const [imgExist, setImgExist] = useState("");

  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `imagens/${file.name}`);
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
          setImgURL(url);
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
        <form onSubmit={handleUpload}>
          <input type="file" onChange={(e) => setImgExist(e.target.value)} />
          {imgURL && <progress value={progress} max="100" />}
          {imgExist && (
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
      </C.AreaButtons>

      {categorias.length > 0 &&
        categorias.map((categoria) => {
          return (
            <C.AreaGroup key={categoria.id}>
              <h3>{categoria.categoria}</h3>
              <TableDocs />
            </C.AreaGroup>
          );
        })}
    </C.Container>
  );
}
