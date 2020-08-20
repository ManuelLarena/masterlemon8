import React from 'react';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartContext, Selection } from 'core/shopping-cart.context';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

const useStyles = makeStyles(theme => ({
  h4: {
    margin: theme.spacing(2),
    textAlign: 'center',
  },
}));

export const ShoppingCart: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  React.useEffect(() => {
    shoppingCartContext.selection;
  }, [shoppingCartContext.selection]);

  const handleDelete = (selectedItem: Selection) =>
    shoppingCartContext.setSelection(selectedItem);

  const handleDeleteAll = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => shoppingCartContext.eraseCart();

  const handleCheckOut = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => history.push(routes.checkout);

  return (
    <>
      <Typography variant="h4" gutterBottom className={classes.h4}>
        <ShoppingCartIcon /> Cart
      </Typography>
      <ShoppingCartComponent
        shoppingCart={shoppingCartContext.selection}
        onDelete={handleDelete}
        onDeleteAll={handleDeleteAll}
        checkOut={handleCheckOut}
      />
    </>
  );
};
