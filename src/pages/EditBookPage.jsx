import { Navbar } from '../components/common/Navbar';
import { FormEdit } from '../components/edit/FormEdit';
import { useParams } from 'react-router-dom';
import React from 'react';
import { TitlePage } from '../components/edit/TitlePage';

function EditBookPage() {
  const { bookId } = useParams();

  return (
    <>
      <Navbar />
      <TitlePage />
      <FormEdit params={bookId} />
    </>
  );
}

export { EditBookPage };
