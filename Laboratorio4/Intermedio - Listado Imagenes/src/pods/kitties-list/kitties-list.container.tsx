import React from 'react';
import { KittiesListComponent } from './kitties-list.component';
import { Kitties } from './kitties-list.vm';
import { mapKittiesListFromApiToVm } from './kitties-list.mapper';
import { getKittiesList } from 'core/api';
import * as classes from './kitties-list.styles';
import produce from 'immer';
import { ShoppingCartContext } from 'core/shopping-cart.context';

export const KittiesListContainer: React.FunctionComponent = () => {
  const [kitties, setKitties] = React.useState<Kitties[]>([]);
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  // React.useEffect(() => {}, [shoppingCartContext.selection]);

  const isSelectedInContext = (kitty: Kitties) => {
    return (
      shoppingCartContext.selection.findIndex(
        item => item.id === kitty.id) !== -1
    );
  };

  const onLoadKittiesList = async () => {
    const apiKittiesList = await getKittiesList();
    let viewModelKittiesList = mapKittiesListFromApiToVm(apiKittiesList);
    viewModelKittiesList = viewModelKittiesList.map(item => ({
      ...item,
      selected: isSelectedInContext(item),
    }));
    setKitties(viewModelKittiesList);
  };

  React.useEffect(() => {
    onLoadKittiesList();
  }, [shoppingCartContext.selection]);

  const handleChangeKittySelection = (kitty: Kitties) => {
    const newKittiesList = produce(kitties, draft => {
      const kittyIndex = draft.findIndex(item => item.id === kitty.id);
      draft[kittyIndex].selected = !draft[kittyIndex].selected;
    });
    setKitties(newKittiesList);
    shoppingCartContext.setSelection({ ...kitty });
  };

  return (
    <>
      <h1 className={classes.title}>Kitties list</h1>
      <KittiesListComponent
        kitties={kitties}
        onChangeSelection={handleChangeKittySelection}
      />
    </>
  );
};
