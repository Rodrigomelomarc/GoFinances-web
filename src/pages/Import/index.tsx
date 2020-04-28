import React, { useState } from 'react';
import { FiAlertTriangle, FiFileText } from 'react-icons/fi';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

import api from '../../services/api';

import Header from '../../components/Header';
import { Container, ImportContainer, DropzoneStyled } from './styles';

const Import: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'text/csv',
    onDrop: (files) => handlePreview(files),
  });

  function handlePreview(files: any) {
    setFile(files[0]);
  }

  async function handleUpdate() {
    const formData = new FormData();

    if (!file) {
      return;
    }

    formData.append('file', file);

    try {
      await api.post('/transactions/import', formData);
      toast.success('Arquivo CSV importado com sucesso.');
      setFile(null);
    } catch {
      toast.error('Erro ao importar arquivo, tente novamente.');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Importar uma transação</h1>
        <ImportContainer>
          <div>
            <DropzoneStyled {...getRootProps()}>
              <input {...getInputProps()} />
              {file ? (
                <span>
                  <FiFileText color="#969cb3" size={25} />
                  {file?.name}
                </span>
              ) : (
                <p>Selecione ou arraste o arquivo aqui</p>
              )}
            </DropzoneStyled>
          </div>
          <footer>
            <span>
              <FiAlertTriangle size={15} color="#FF872C" />
              Permitido apenas arquivos CSV
            </span>
            <button onClick={() => handleUpdate()}>Enviar</button>
          </footer>
        </ImportContainer>
      </Container>
    </>
  );
};

export default Import;
