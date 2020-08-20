import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Selection } from 'core/shopping-cart.context';

export const useStyles = makeStyles(theme => ({
  shoppingList: {
    padding: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  btnGroup: {
    flex: '1 1 auto',
    width: 'auto',
    borderRadius: '0',
  },
}));

interface Props {
  shoppingCart: Selection[]; 
  onDelete: (selectedItem: Selection) => void;
  onDeleteAll: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  checkOut: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const ShoppingCartComponent: React.FC<Props> = ({
  shoppingCart,
  onDelete,
  onDeleteAll,
  checkOut
}) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.shoppingList}>
        {shoppingCart.map(item => {
          return (
            <ListItem key={item.id} button>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${item.title}`} src={`${item.picUrl}`} />
              </ListItemAvatar>
              <ListItemText id={item.id} primary={`${item.title}`} />
              <ListItemSecondaryAction>
                <IconButton aria-label="delete" onClick={() => onDelete(item)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <ButtonGroup disableElevation variant="contained">
        <Button
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={onDeleteAll}
          className={classes.btnGroup}
        >
          Delete all
        </Button>
        <Button
          color="primary"
          endIcon={<PlaylistAddCheckIcon />}
          onClick={checkOut}
          className={classes.btnGroup}
        >
          Checkout
        </Button>
      </ButtonGroup>
    </>
  );
};
