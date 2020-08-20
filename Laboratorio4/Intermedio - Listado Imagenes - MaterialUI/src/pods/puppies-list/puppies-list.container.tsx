import React from 'react';
import { PuppiesListComponent } from './puppies-list.component';
import { Puppies } from './puppies-list.vm';
import { mapPuppiesListFromApiToVm } from './puppies-list.mapper';
import { getPuppiesList } from './api';
import produce from 'immer';
import { ShoppingCartContext } from 'core/shopping-cart.context';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  h2: {
    margin: theme.spacing(2, 0),
  },
}));

export const PuppiesListContainer: React.FunctionComponent = () => {
  const classes = useStyles();
  const [puppies, setPuppies] = React.useState<Puppies[]>([]);
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  const isSelectedInContext = (puppies: Puppies) => {
    return (
      shoppingCartContext.selection.findIndex(
        item => item.id === puppies.id
      ) !== -1
    );
  };

  const onLoadPuppiesList = async () => {
    const apiPuppiesList = await getPuppiesList();
    let viewModelPuppiesList = mapPuppiesListFromApiToVm(apiPuppiesList);
    viewModelPuppiesList = viewModelPuppiesList.map(item => ({
      ...item,
      selected: isSelectedInContext(item),
    }));
    setPuppies(viewModelPuppiesList);
  };

  React.useEffect(() => {
    onLoadPuppiesList();
  }, [shoppingCartContext.selection]);

  const handleChangePuppySelection = (puppy: Puppies) => {
    const newPuppiesList = produce(puppies, draf => {
      const puppyIndex = draf.findIndex(item => item.id === puppy.id);
      draf[puppyIndex].selected = !draf[puppyIndex].selected;
    });
    setPuppies(newPuppiesList);
    shoppingCartContext.setSelection({ ...puppy });
  };

  return (
    <>
      <Typography variant="h2" align="center" className={classes.h2}>
        Puppies
      </Typography>
      <PuppiesListComponent
        puppies={puppies}
        onChangeSelection={handleChangePuppySelection}
      />
    </>
  );
};
