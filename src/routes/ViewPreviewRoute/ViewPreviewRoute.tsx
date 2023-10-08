import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NavBar from '../../components/navBar/navBar';
import ItemDetails from '../../components/previewDetails/previewDatails';

export const ViewPreviewRoute: React.FC = () => {
  const { itemId } = useParams<{ itemId?: string }>();
  const location = useLocation();
  const itemData = location.state?.item || null;

  return (
    <>
      <NavBar />
      <ItemDetails itemId={itemId || ''} itemData={itemData} />
    </>
  );
};

export default ViewPreviewRoute;
