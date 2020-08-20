import React from 'react';
import { PuppiesListComponent } from './puppies-list.component';
import { Puppies } from './puppies-list.vm';
import { mapPuppiesListFromApiToVm } from './puppies-list.mapper';
import { getPuppiesList } from 'core/api';
import * as classes from './puppies-list.styles';
import produce from 'immer';
import { ShoppingCartContext } from 'core/shopping-cart.context';

export const PuppiesListContainer: React.FunctionComponent = () => {
  const [puppies, setPuppies] = React.useState<Puppies[]>([]);
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  // React.useEffect(() => {}, [shoppingCartContext.selection]);

  const isSelectedInContext = (puppies: Puppies) => {
    return (shoppingCartContext.selection.findIndex(
      item => item.id === puppies.id) !== -1
    )
  }

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
      <h1 className={classes.title}>Puppies list</h1>
      <PuppiesListComponent
        puppies={puppies}
        onChangeSelection={handleChangePuppySelection}
      />
    </>
  );
};
