import React from 'react';
import { ShoppingCartContext, Selection } from 'core/shopping-cart.context';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';

export const ShoppingCartComponent: React.FC = () => {
  const shoppingCartContext = React.useContext(ShoppingCartContext);

  React.useEffect(() => {}, [shoppingCartContext.selection]);

  const handleDelete = (selectedItem: Selection) => {
    shoppingCartContext.setSelection(selectedItem);
    console.log(selectedItem, shoppingCartContext.selection);
  };

  return (
    <List>
      {shoppingCartContext.selection.map(item => {
        return (
          <ListItem key={item.id} button>
            <ListItemAvatar>
              <Avatar alt={`Avatar n°${item.title}`} src={`${item.picUrl}`} />
            </ListItemAvatar>
            <ListItemText id={item.id} primary={`${item.title}`} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="delete"
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => handleDelete(item)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
