import React from 'react';
import { KittiesListContainer } from 'pods/kitties-list';
import { useHistory} from 'react-router-dom';
import { ShoppingLayout } from 'layout/shopping-layout';
import Button from '@material-ui/core/Button';

export const KittiesListScene: React.FC = () => {
  const history = useHistory();

  const handlePuppiesList = () => {
    history.push('/puppies-list');
  };

  return (
    <ShoppingLayout>
      <KittiesListContainer />
      <Button variant="contained" color="primary" onClick={handlePuppiesList}>
        Navigate to Puppies List
      </Button>
    </ShoppingLayout>
  );
};
