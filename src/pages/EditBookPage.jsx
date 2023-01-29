import { Navbar } from '../components/common/Navbar';
import { FormEdit } from '../components/edit/FormEdit';
import { useParams } from 'react-router-dom';
import React from 'react';
import { TitlePage } from '../components/edit/TitlePage';
import { BreadcrumbComponent } from '../components/common/BreadcrumbComponent';

function EditBookPage() {
  const { bookId } = useParams();

  return (
    <>
      <Navbar />
      <BreadcrumbComponent />
      <TitlePage />
      <FormEdit params={bookId} />
    </>
  );
}

export { EditBookPage };
