import React from 'react';
import { KittiesListComponent } from './kitties-list.component';
import { Kitties } from './kitties-list.vm';
import { mapKittiesListFromApiToVm } from './kitties-list.mapper';
import { getKittiesList } from './api';
import produce from 'immer';
import { ShoppingCartContext } from 'core/shopping-cart.context';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  h2: {
    margin: theme.spacing(2, 0),
  },
}));

export const KittiesListContainer: React.FunctionComponent = () => {
  const classes = useStyles();
  const [kitties, setKitties] = React.useState<Kitties[]>([]);
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  const isSelectedInContext = (kitty: Kitties) => {
    return (
      shoppingCartContext.selection.findIndex(item => item.id === kitty.id) !==
      -1
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
      <Typography variant="h2" align="center" className={classes.h2}>
        Kitties
      </Typography>
      <KittiesListComponent
        kitties={kitties}
        onChangeSelection={handleChangeKittySelection}
      />
    </>
  );
};
