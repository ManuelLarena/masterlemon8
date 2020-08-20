import React from 'react';
import { PuppiesListContainer } from 'pods/puppies-list';
import { useHistory } from 'react-router-dom';
import { ShoppingLayout } from 'layout/shopping-layout';
import Button from '@material-ui/core/Button';

export const PuppiesListScene: React.FC = () => {
  const history = useHistory();

  const handleKittiesList = () => {
    history.push('/kitties-list');
  };

  return (
    <ShoppingLayout>
      <PuppiesListContainer />
      <Button variant="contained" color="primary" onClick={handleKittiesList}>
        Navigate to Kitties List
      </Button>
    </ShoppingLayout>
  );
};
